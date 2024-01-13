#!/usr/bin/env bash
# Deploy 360darshan.com static site to Github pages

# clean up
cd /media/jay/Code/Projects/Personal/360darshan/static
rm -rfv audio books build css img js of vr *.gz favicon.ico index.html index.gz
# move files
cd /media/jay/Code/Projects/Personal/360darshan/storage/app/dist

read -p "PHP version (default: 8.1)" version

while [[ -z "$version" ]]; do
  version='8.1'
done

echo /etc/php/"$version"/cli/conf.d/20-xdebug.ini


if [ "$1" == "enable" ]; then
    [ -f /etc/php/"$version"/cli/conf.d/20-xdebug.ini-dist ] && sudo mv /etc/php/"$version"/cli/conf.d/20-xdebug.ini-dist /etc/php/"$version"/cli/conf.d/20-xdebug.ini && echo "Xdebug enabled" || echo "Xdebug already enabled"
else
    [ -f /etc/php/"$version"/cli/conf.d/20-xdebug.ini ] && sudo mv /etc/php/"$version"/cli/conf.d/20-xdebug.ini /etc/php/"$version"/cli/conf.d/20-xdebug.ini-dist && echo "Xdebug disabled" || echo "Xdebug already disabled"
fi