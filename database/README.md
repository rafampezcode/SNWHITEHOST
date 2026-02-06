# Database Setup Guide

## Requirements
- MySQL 5.7+ or MariaDB 10.3+
- Database credentials with CREATE/INSERT/UPDATE/SELECT privileges

## Quick Setup

### 1. Install MySQL (if not installed)
```bash
# Windows (using Chocolatey)
choco install mysql

# Or download from: https://dev.mysql.com/downloads/installer/
```

### 2. Create the database and tables
```bash
mysql -u root -p < database/init.sql
```

### 3. Configure environment variables
Create a `.env.local` file in the project root:

```env
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=your_mysql_password
MYSQL_DATABASE=snwhitehost_admin
MYSQL_PORT=3306
```

### 4. Verify connection
Restart your Next.js dev server:
```bash
pnpm dev
```

Visit `http://localhost:3000/admin/login` and log in with:
- **Username**: ADMIN
- **Password**: ADMIN

## Database Schema

### `global_settings` table
Stores all global website configuration:

| Column | Type | Description |
|--------|------|-------------|
| `id` | INT (PK) | Auto-increment primary key |
| `settings_key` | VARCHAR(100) | Unique identifier (always "global") |
| `settings_value` | JSON | Nested JSON with all settings |
| `created_at` | TIMESTAMP | Record creation timestamp |
| `updated_at` | TIMESTAMP | Auto-updated on changes |

### Settings JSON Structure
```json
{
  "maintenance": {
    "enabled": false,
    "message": "We are performing scheduled maintenance."
  },
  "promoBanner": {
    "enabled": false,
    "message": "Special offer available now.",
    "code": "WELCOME10",
    "endDate": null,
    "href": "https://clients.snwhitehosting.com"
  },
  "announcement": {
    "enabled": false,
    "message": ""
  }
}
```

## Security Notes

⚠️ **IMPORTANT**: The default login credentials (ADMIN/ADMIN) are for development only.

For production:
1. Change credentials in `/app/api/admin/login/route.ts`
2. Use environment variables for admin credentials
3. Implement proper authentication (NextAuth.js, Clerk, etc.)
4. Enable HTTPS and secure cookies

## Troubleshooting

### Connection Error
```
Error: Can't connect to MySQL server
```
**Solution**: Verify MySQL is running and credentials are correct in `.env.local`

### Module not found: mysql2
```
Module not found: Can't resolve 'mysql2/promise'
```
**Solution**: Install mysql2: `pnpm add mysql2`

### Access Denied
```
ER_ACCESS_DENIED_ERROR: Access denied for user
```
**Solution**: Check MySQL user permissions:
```sql
GRANT ALL PRIVILEGES ON snwhitehost_admin.* TO 'root'@'localhost';
FLUSH PRIVILEGES;
```

## Alternative: Using Docker

```bash
# Start MySQL container
docker run -d \
  --name snwhitehost-mysql \
  -e MYSQL_ROOT_PASSWORD=admin \
  -e MYSQL_DATABASE=snwhitehost_admin \
  -p 3306:3306 \
  mysql:8.0

# Initialize database
docker exec -i snwhitehost-mysql mysql -uroot -padmin < database/init.sql
```

Then use these environment variables:
```env
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=admin
MYSQL_DATABASE=snwhitehost_admin
MYSQL_PORT=3306
```
