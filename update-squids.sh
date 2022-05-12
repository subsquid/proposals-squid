for CHAIN in kusama polkadot moonbeam moonriver acala crust hydradx bifrost
do
    npx sqd squid:update deepdao-${CHAIN}@v3 -r --source https://github.com/subsquid/subsquid-deepdao#${CHAIN}
done