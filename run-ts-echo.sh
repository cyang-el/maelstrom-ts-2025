#!/bin/bash
npm install && npm run build && 
chmod +x ./run-node.sh &&
../maelstrom test \
             -w echo \
             --bin ./run-node.sh \
             --node-count 1 \
             --time-limit 10
