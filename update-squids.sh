for CHAIN in kusama polkadot moonbeam moonriver acala karura
do
    npx sqd squid:release deepdao-${CHAIN}@v4 --source https://github.com/subsquid/subsquid-deepdao#${CHAIN}
done