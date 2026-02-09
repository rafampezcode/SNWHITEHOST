#!/usr/bin/env node
/**
 * Auto-commit script for config changes
 * Run this after admin updates: `node scripts/commit-config.js`
 * Or integrate with your deployment pipeline
 */

import { execSync } from 'child_process'
import { readFileSync } from 'fs'

try {
  // Check if config.json has changes
  const status = execSync('git status --porcelain config.json', { encoding: 'utf-8' })

  if (!status.trim()) {
    console.log('✓ No changes to config.json')
    process.exit(0)
  }

  // Read current config to get theme info
  const config = JSON.parse(readFileSync('config.json', 'utf-8'))
  const theme = config.defaultTheme?.festiveTheme || 'none'

  // Stage and commit
  execSync('git add config.json')
  execSync(`git commit -m "chore: update global settings (theme: ${theme})"`)

  console.log(`✓ Committed config.json (theme: ${theme})`)

  // Optional: push to remote
  if (process.argv.includes('--push')) {
    execSync('git push')
    console.log('✓ Pushed to remote')
  } else {
    console.log('ℹ️  Run with --push to automatically push to remote')
  }
} catch (error) {
  if (error.status === 1) {
    console.log('ℹ️  No changes to commit or git error. This is normal.')
  } else {
    console.error('Error:', error.message)
    process.exit(1)
  }
}
