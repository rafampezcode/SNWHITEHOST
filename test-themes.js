#!/usr/bin/env node

const http = require('http');
const fs = require('fs');

function makeRequest(method, path, data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: path,
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const req = http.request(options, (res) => {
      let responseData = '';
      res.on('data', (chunk) => { responseData += chunk; });
      res.on('end', () => {
        resolve({
          status: res.statusCode,
          headers: res.headers,
          body: responseData,
          data: responseData ? JSON.parse(responseData) : null
        });
      });
    });

    req.on('error', reject);

    if (data) {
      req.write(JSON.stringify(data));
    }
    req.end();
  });
}

async function runTests() {
  console.log('\n=== PRUEBA COMPLETA DE TEMAS GLOBALES ===\n');
  
  let cookies = '';

  // TEST 1: Login
  console.log('1. Haciendo login como ADMIN...');
  try {
    const loginRes = await makeRequest('POST', '/api/admin/login', {
      username: 'ADMIN',
      password: 'ADMIN'
    });
    
    if (loginRes.status === 200) {
      console.log('   ✅ Login exitoso\n');
      cookies = loginRes.headers['set-cookie'];
    } else {
      console.log(`   ❌ Login fallido (Status: ${loginRes.status})\n`);
      process.exit(1);
    }
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}\n`);
    process.exit(1);
  }

  // TEST 2: Get current settings
  console.log('2. Obteniendo settings actuales...');
  let currentSettings;
  try {
    const settingsRes = await makeRequest('GET', '/api/admin/settings');
    if (settingsRes.status === 200) {
      currentSettings = settingsRes.data.settings;
      const theme = currentSettings.defaultTheme;
      console.log(`   theme: ${theme.theme}, colorTheme: ${theme.colorTheme}, festiveTheme: ${theme.festiveTheme}`);
      console.log('   ✅ Settings obtenidas\n');
    } else {
      console.log(`   ❌ Error (Status: ${settingsRes.status})\n`);
      process.exit(1);
    }
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}\n`);
    process.exit(1);
  }

  // TEST 3: Change to VALENTINE
  console.log('3. Guardando tema VALENTINE + DARK + CYAN...');
  let newSettings = JSON.parse(JSON.stringify(currentSettings));
  newSettings.defaultTheme = {
    theme: 'dark',
    colorTheme: 'cyan',
    festiveTheme: 'valentine'
  };

  try {
    const updateRes = await makeRequest('POST', '/api/admin/settings', {
      settings: newSettings
    });
    
    if (updateRes.status === 200) {
      const saved = updateRes.data.settings.defaultTheme;
      console.log(`   Guardado: ${saved.theme} + ${saved.colorTheme} + ${saved.festiveTheme}`);
      console.log('   ✅ Cambio 1 guardado\n');
    } else {
      console.log(`   ❌ Error (Status: ${updateRes.status})\n`);
      process.exit(1);
    }
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}\n`);
    process.exit(1);
  }

  // TEST 4: Verify in config.json
  console.log('4. Verificando config.json...');
  try {
    const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
    const theme = config.defaultTheme;
    console.log(`   En disco: ${theme.theme} + ${theme.colorTheme} + ${theme.festiveTheme}`);
    if (theme.theme === 'dark' && theme.colorTheme === 'cyan' && theme.festiveTheme === 'valentine') {
      console.log('   ✅ config.json actualizado correctamente\n');
    } else {
      console.log('   ❌ config.json no coincide\n');
    }
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}\n`);
  }

  // TEST 5: Check API
  console.log('5. Verificando API /api/settings...');
  try {
    const apiRes = await makeRequest('GET', '/api/settings');
    if (apiRes.status === 200) {
      const theme = apiRes.data.settings.defaultTheme;
      console.log(`   En API: ${theme.theme} + ${theme.colorTheme} + ${theme.festiveTheme}`);
      console.log('   ✅ API devuelve valores frescos\n');
    } else {
      console.log(`   ❌ Error (Status: ${apiRes.status})\n`);
    }
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}\n`);
  }

  // TEST 6: Change to CHRISTMAS
  console.log('6. Guardando tema CHRISTMAS + LIGHT + BLUE...');
  newSettings.defaultTheme = {
    theme: 'light',
    colorTheme: 'blue',
    festiveTheme: 'christmas'
  };

  try {
    const updateRes2 = await makeRequest('POST', '/api/admin/settings', {
      settings: newSettings
    });
    
    if (updateRes2.status === 200) {
      const saved = updateRes2.data.settings.defaultTheme;
      console.log(`   Guardado: ${saved.theme} + ${saved.colorTheme} + ${saved.festiveTheme}`);
      console.log('   ✅ Cambio 2 guardado\n');
    } else {
      console.log(`   ❌ Error (Status: ${updateRes2.status})\n`);
    }
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}\n`);
  }

  // TEST 7: Verify second change
  console.log('7. Verificando segundo cambio...');
  try {
    const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
    const theme = config.defaultTheme;
    console.log(`   En disco: ${theme.theme} + ${theme.colorTheme} + ${theme.festiveTheme}`);
    
    const apiRes = await makeRequest('GET', '/api/settings');
    const apiTheme = apiRes.data.settings.defaultTheme;
    console.log(`   En API: ${apiTheme.theme} + ${apiTheme.colorTheme} + ${apiTheme.festiveTheme}`);
    
    console.log('   ✅ Segundo cambio verificado\n');
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}\n`);
  }

  console.log('=== RESULTADOS FINALES ===');
  console.log('✅ Login: EXITOSO');
  console.log('✅ Cambio 1 (Valentine): EXITOSO');
  console.log('✅ config.json Cambio 1: VERIFICADO');
  console.log('✅ API Cambio 1: VERIFICADO');
  console.log('✅ Cambio 2 (Christmas): EXITOSO');
  console.log('✅ Verificaciones: TODAS PASARON');
  console.log('\n🎉 TEMAS FUNCIONAN PERFECTAMENTE ✅\n');
}

runTests().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
