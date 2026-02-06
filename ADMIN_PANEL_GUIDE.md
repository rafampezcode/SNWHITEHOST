# Admin Panel Guide - Global Website Settings

## Access

**URL:** `http://localhost:3000/admin/login`

**Credentials:**
- Username: `ADMIN`
- Password: `ADMIN`

⚠️ **Warning:** These are development credentials. Change them before deploying to production.

---

## Features

### 1. Theme Management

#### Color Themes
Choose from 5 color schemes that affect primary buttons and accents:
- **Blue** (Default) - Professional dark red
- **Green** - Eco-friendly green
- **Orange** - Warm orange
- **Red** - Bold red
- **Cyan** - Modern cyan

#### Festive Themes
Subtle seasonal effects with animated particles and themed button colors:
- **Valentine's Day** 💕 - Pink hearts + pink buttons
- **Christmas** ❄️ - Blue snowflakes + blue winter buttons
- **Halloween** 🎃 - Orange pumpkins + orange buttons
- **Easter** 🥚 - Purple eggs + purple buttons
- **Black Friday** 🏷️ - Gold stars + gold buttons
- **Summer** ☀️ - Red sun particles + red buttons
- **New Year** 🎉 - Golden fireworks + gold buttons
- **St. Patrick's Day** 🍀 - Green clovers + green buttons

**Note:** Festive themes only change button colors and add subtle particle effects. They don't alter the overall site appearance aggressively.

---

### 2. Global Website Settings

Control site-wide banners and messages:

#### Maintenance Mode
- **Priority:** Highest (overrides all other banners)
- **Use case:** Scheduled maintenance, emergency downtime
- **Appearance:** Red banner at the top of every page
- **Fields:**
  - Enable/disable toggle
  - Custom message

#### Announcement Banner
- **Priority:** Medium (shown when maintenance is OFF)
- **Use case:** Important news, updates, alerts
- **Appearance:** Blue banner at the top
- **Fields:**
  - Enable/disable toggle
  - Announcement message

#### Promo Banner
- **Priority:** Low (shown when maintenance is OFF)
- **Use case:** Sales, promotions, special offers
- **Appearance:** Gradient banner with countdown timer
- **Fields:**
  - Enable/disable toggle
  - Promo message
  - Promo code (e.g., "SAVE20")
  - Link URL (default: client portal)
  - End date (optional countdown timer)

---

## Banner Priority System

```
┌─────────────────────────┐
│  Maintenance Enabled?   │
│         (YES)           │
└───────────┬─────────────┘
            │
            ▼
   ┌────────────────────┐
   │   RED MAINTENANCE  │
   │      BANNER        │
   └────────────────────┘
            
            
┌─────────────────────────┐
│  Maintenance Enabled?   │
│          (NO)           │
└───────────┬─────────────┘
            │
            ├───────────────────┐
            ▼                   ▼
   ┌────────────────┐   ┌────────────────┐
   │ Announcement?  │   │  Promo Banner? │
   │     (YES)      │   │     (YES)      │
   └────────┬───────┘   └────────┬───────┘
            ▼                    ▼
   ┌────────────────┐   ┌────────────────┐
   │ BLUE ANNOUNCE  │   │ GRADIENT PROMO │
   │    BANNER      │   │     BANNER     │
   └────────────────┘   └────────────────┘
```

**Both announcement and promo can be shown at the same time** when maintenance is disabled.

---

## Storage System

The admin panel uses a **hybrid storage approach**:

### Without MySQL (Default)
- Settings stored in `.data/global-settings.json`
- Works immediately without database setup
- File-based, survives server restarts
- Excluded from git (`.data/` is in `.gitignore`)

### With MySQL (Optional)
- Configure environment variables in `.env.local`:
  ```env
  MYSQL_HOST=localhost
  MYSQL_USER=root
  MYSQL_PASSWORD=your_password
  MYSQL_DATABASE=snwhitehost_admin
  MYSQL_PORT=3306
  ```
- Run database setup: `mysql -u root -p < database/init.sql`
- System automatically uses MySQL when configured
- Falls back to file storage if MySQL fails

---

## Workflow

### Making Changes

1. **Log in** to the admin panel
2. **Navigate** to the section you want to modify:
   - Theme Management (top cards)
   - Global Website Settings (bottom card)
3. **Make changes** using toggles, inputs, and switches
4. **Click "Preview Site"** (optional) to open the main site in a new tab
5. **Click "Save Settings"** to apply changes
6. **Refresh the main site** to see the changes live

### Live Preview Section

After configuring settings, scroll down to see the "Active Banners & Messages" card which shows exactly what users will see on the website.

### Success Indicators

- ✅ Green success message: "Settings updated successfully!"
- ✅ Live preview updates automatically
- ✅ Auto-clears after 5 seconds

### Error Handling

- ❌ Red error message if save fails
- 💡 Automatic fallback to file storage if MySQL is unavailable

---

## Best Practices

1. **Test before enabling:**
   - Configure all fields
   - Click "Preview Site"
   - Verify the appearance
   - Then enable the banner

2. **Maintenance mode:**
   - Schedule during low-traffic hours
   - Provide clear message with expected duration
   - Disable promptly when done

3. **Promo banners:**
   - Set end dates for time-limited offers
   - Update promo codes regularly
   - Link directly to relevant pages

4. **Announcements:**
   - Keep messages short and clear
   - Use for important updates only
   - Disable when no longer relevant

---

## Troubleshooting

### Changes don't appear on the main site
- **Solution:** Hard refresh the page (Ctrl+F5 / Cmd+Shift+R)
- **Reason:** Browser caching

### "Unable to save global settings"
- **Check:** `.data/` folder has write permissions
- **Check:** MySQL connection if configured
- **Solution:** Settings automatically fall back to file storage

### Lost admin password
- **Solution:** Edit `/app/api/admin/login/route.ts`
- **Current:** Username and password are both `ADMIN`

### Settings reset after deployment
- **File storage:** Ensure `.data/` folder is included in deployment (not in `.gitignore` exclusions)
- **MySQL:** Verify database credentials in production environment variables

---

## Security Notes

⚠️ **IMPORTANT FOR PRODUCTION:**

1. **Change default credentials** in `/app/api/admin/login/route.ts`
2. **Use environment variables** for sensitive credentials:
   ```env
   ADMIN_USERNAME=your_secure_username
   ADMIN_PASSWORD=your_secure_password
   ```
3. **Enable HTTPS** and secure cookies
4. **Implement rate limiting** on login endpoint
5. **Consider using NextAuth.js** or similar for production authentication

---

## API Endpoints

### Public (No Auth Required)
- `GET /api/settings` - Read current global settings

### Admin Only (Requires Auth)
- `GET /api/admin/settings` - Read settings (admin view)
- `POST /api/admin/settings` - Update settings
- `POST /api/admin/login` - Authenticate
- `POST /api/admin/logout` - End session
- `GET /api/admin/check` - Verify session

---

## File Structure

```
app/
  admin/
    page.tsx              # Main admin dashboard
    login/
      page.tsx           # Login page
  api/
    admin/
      login/route.ts     # Authentication
      logout/route.ts    # Session cleanup
      check/route.ts     # Session validation
      settings/route.ts  # Settings CRUD (protected)
    settings/
      route.ts           # Public settings read
components/
  global-settings-provider.tsx  # React context
  global-site-banner.tsx        # Banner renderer
lib/
  global-settings.ts            # Server-side logic
  global-settings-types.ts      # Shared types
  mysql.ts                      # Database connector
.data/
  global-settings.json          # File storage (auto-created)
database/
  init.sql                      # MySQL setup script
  README.md                     # Database guide
```
