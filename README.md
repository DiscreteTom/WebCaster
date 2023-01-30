# WebCaster

Cast your PC screen to any browser.

## Getting Started

```bash
# clone this repo
git clone https://github.com/DiscreteTom/WebCaster.git

# add dependencies
yarn

# build static files
yarn build

# host http server
yarn start

# start peer server
npx peerjs --port 9000 --path /
```

Then, on one device, click 'Register as Viewer', on another device, click 'Cast Screen', you will see your screen on the viewer device.
