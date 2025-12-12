#!/bin/bash

# SEO Configuration Updater Script
# This script helps you update all occurrences of placeholder domain and configuration values

echo "=========================================="
echo "NE Students Connect - SEO Config Updater"
echo "=========================================="
echo ""

# Get user input
read -p "Enter your domain (e.g., nestudentsconnect.com): " DOMAIN
read -p "Enter your site URL (e.g., https://nestudentsconnect.com): " SITE_URL
read -p "Enter your email: " EMAIL
read -p "Enter your phone number: " PHONE
read -p "Enter your city: " CITY

# Color codes for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo ""
echo -e "${BLUE}Updating configuration files...${NC}"

# Update HTML files
for file in index.html subjects.html notes.html past-papers.html tips.html; do
    if [ -f "$file" ]; then
        sed -i '' "s|yourdomain.com|$DOMAIN|g" "$file"
        sed -i '' "s|https://yourdomain.com|$SITE_URL|g" "$file"
        sed -i '' "s|info@nestudentsconnect.com|$EMAIL|g" "$file"
        sed -i '' "s|+254 700 000 000|$PHONE|g" "$file"
        sed -i '' "s|Garissa|$CITY|g" "$file"
        echo -e "${GREEN}✓${NC} Updated $file"
    fi
done

# Update sitemap.xml
if [ -f "sitemap.xml" ]; then
    sed -i '' "s|yourdomain.com|$DOMAIN|g" sitemap.xml
    sed -i '' "s|https://yourdomain.com|$SITE_URL|g" sitemap.xml
    echo -e "${GREEN}✓${NC} Updated sitemap.xml"
fi

# Update robots.txt
if [ -f "robots.txt" ]; then
    sed -i '' "s|yourdomain.com|$DOMAIN|g" robots.txt
    sed -i '' "s|https://yourdomain.com|$SITE_URL|g" robots.txt
    echo -e "${GREEN}✓${NC} Updated robots.txt"
fi

# Update seo-config.json
if [ -f "seo-config.json" ]; then
    sed -i '' "s|yourdomain.com|$DOMAIN|g" seo-config.json
    sed -i '' "s|https://yourdomain.com|$SITE_URL|g" seo-config.json
    sed -i '' "s|info@nestudentsconnect.com|$EMAIL|g" seo-config.json
    sed -i '' "s|+254 700 000 000|$PHONE|g" seo-config.json
    sed -i '' "s|Garissa|$CITY|g" seo-config.json
    echo -e "${GREEN}✓${NC} Updated seo-config.json"
fi

echo ""
echo -e "${GREEN}=========================================="
echo "All files updated successfully!"
echo "==========================================${NC}"
echo ""
echo "Next steps:"
echo "1. Verify all domain replacements are correct"
echo "2. Add your Google Analytics ID to seo-config.json"
echo "3. Submit sitemap.xml to Google Search Console"
echo "4. Set up Google Analytics"
echo "5. Deploy your website"
echo ""
