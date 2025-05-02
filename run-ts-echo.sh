#!/bin/bash
npm install && npm run build &&
chmod +x ./run-node.sh &&
../maelstrom test \
             --bin ./run-node.sh \
             -w echo \
             --node-count 1 \
             --time-limit 10
