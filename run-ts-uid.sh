#!/bin/bash
npm install && npm run build &&
    chmod +x ./run-uid.sh &&
    ../maelstrom test \
                 --bin ./run-uid.sh \
                 -w unique-ids \
                 --node-count 3 \
                 --time-limit 30 \
                 --rate 1000 \
                 --availability total \
                 --nemesis partition
