-- Database initialization script for SNWHITEHOST admin panel
-- This creates the required tables for storing global website settings

CREATE DATABASE IF NOT EXISTS snwhitehost_admin
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_unicode_ci;

USE snwhitehost_admin;

-- Global settings table
-- Stores configuration for maintenance mode, promo banners, and announcements
CREATE TABLE IF NOT EXISTS global_settings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  settings_key VARCHAR(100) NOT NULL UNIQUE,
  settings_value JSON NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_settings_key (settings_key)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert default global settings
INSERT INTO global_settings (settings_key, settings_value) VALUES (
  'global',
  JSON_OBJECT(
    'maintenance', JSON_OBJECT(
      'enabled', false,
      'message', 'We are performing scheduled maintenance.',
      'duration', '1-2 hours'
    ),
    'promoBanner', JSON_OBJECT(
      'enabled', false,
      'message', 'Special offer available now.',
      'code', 'WELCOME10',
      'endDate', NULL,
      'href', 'https://clients.snwhitehosting.com'
    ),
    'announcement', JSON_OBJECT(
      'enabled', false,
      'message', ''
    ),
    'festivePopup', JSON_OBJECT(
      'enabled', false,
      'title', 'Happy Holidays!',
      'message', 'Celebrate with us and enjoy special offers this season.',
      'buttonText', 'Got it!'
    ),
    'defaultTheme', JSON_OBJECT(
      'theme', 'light',
      'colorTheme', 'blue',
      'festiveTheme', 'none'
    )
  )
) ON DUPLICATE KEY UPDATE settings_value = VALUES(settings_value);

-- Verify installation
SELECT 'Database initialized successfully!' AS status;
SELECT * FROM global_settings;
