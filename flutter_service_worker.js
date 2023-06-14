'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "4ad806ed41a73f38b33f3737e44f3c42",
"index.html": "69f4a4a3cab70d6314c7abc3d4c92efe",
"/": "0dc75cf892e09b55549516a63c1ba600",
"graspop_2023_lineup/version.json": "4ad806ed41a73f38b33f3737e44f3c42",
"graspop_2023_lineup/index.html": "0dc75cf892e09b55549516a63c1ba600",
"graspop_2023_lineup/main.dart.js": "fa17d6337703cc4d488223e118a76b6e",
"graspop_2023_lineup/flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"graspop_2023_lineup/index.js": "ff2429cc5d42ce5d5ad7e99b012e70dd",
"graspop_2023_lineup/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"graspop_2023_lineup/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"graspop_2023_lineup/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"graspop_2023_lineup/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"graspop_2023_lineup/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"graspop_2023_lineup/manifest.json": "a2b9cc39cdda27c173e5b6552787e21d",
"graspop_2023_lineup/.git/config": "917d94ec6d37518a5037426c01b56cfe",
"graspop_2023_lineup/.git/objects/50/862399777530801f0fcbfd0a33eeb8a1d747fb": "bddc6bb2b9d614d1f9e7534f33935e56",
"graspop_2023_lineup/.git/objects/57/ffea5ec1d4352c03a6fe251e852263d7210081": "7f19126b1eeab9486de0c978d029c00b",
"graspop_2023_lineup/.git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
"graspop_2023_lineup/.git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
"graspop_2023_lineup/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"graspop_2023_lineup/.git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
"graspop_2023_lineup/.git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
"graspop_2023_lineup/.git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
"graspop_2023_lineup/.git/objects/33/dffbd5355e5c7e9bdc6c6a6e2b6b7504a2ebda": "51ff371df39939dbd52a598c9c450a89",
"graspop_2023_lineup/.git/objects/9c/6caeadd124cd6e05c4e5a117b1c8b9e0db8a3c": "f25b5b2493f805bcb45330a16b85f8a1",
"graspop_2023_lineup/.git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
"graspop_2023_lineup/.git/objects/b2/d8538bb45c4f61b5c9f81c376d73b10891c5aa": "a52e11d925a28399dad01a5f185cfc61",
"graspop_2023_lineup/.git/objects/b2/41c801d9348914288676fa4ca1ba1902b35ad7": "53a203c5b9720b8b0af00a6e05423ded",
"graspop_2023_lineup/.git/objects/ad/9f850c5011141be7a261e9990cffe3e4e1f0d2": "bf301d63ff93ba69ef463f575e51f2a5",
"graspop_2023_lineup/.git/objects/ad/cdca841ca07379d186cf5e1779ba5bc8f9cc53": "30a7e6b235c312b552a3cbd570d5f75e",
"graspop_2023_lineup/.git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
"graspop_2023_lineup/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"graspop_2023_lineup/.git/objects/d6/72cb14a67b17abd00ed33c310a7fac1142fb9d": "629e5676f558dc3065e6b74f32e4b4c4",
"graspop_2023_lineup/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"graspop_2023_lineup/.git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
"graspop_2023_lineup/.git/objects/f4/2bebd3ef1b3ea97910b0cff7269a4f6bc07945": "fac79d4ca1b828954f9b922580273671",
"graspop_2023_lineup/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"graspop_2023_lineup/.git/objects/c7/5e2a0c47bea95bc2abf6a0e43f7a858b3c3f9f": "394bb4acf839b25fad90e1f1689d8812",
"graspop_2023_lineup/.git/objects/ee/f5bc16e4b20cf13c58cffce062529f1835ea19": "5b2baf5cd4102c0c670d6951891761e0",
"graspop_2023_lineup/.git/objects/fc/4acd47efed9d38359f80d029a1210e8474935f": "38909296ad30322c066d4ce5ad0cf359",
"graspop_2023_lineup/.git/objects/fc/a01bac4157c13df86ac2a885098382599a09cb": "6def8370125ba16abc97857f1d438c91",
"graspop_2023_lineup/.git/objects/20/64dccb8bb4af3f7c8b8af735afdc21155e4475": "52cd1d85c31c96d9c27d80e630aabbf5",
"graspop_2023_lineup/.git/objects/29/48d6270262ca3fa4bff49704fced5e508ebf45": "304a8f21c99cc93098e470d54cc3b663",
"graspop_2023_lineup/.git/objects/7c/08766286dedd3db49d7e195818eab7781119ea": "4ac732ab2e994b59e61d1a9e144b378f",
"graspop_2023_lineup/.git/objects/7c/b4dbd797f8762bd3989a8d1c37afd572b54802": "2efaa0e25f696574266843b954e37045",
"graspop_2023_lineup/.git/objects/80/91419774437658763e35580b555c4e1ee05dd4": "8a1b2dac9c77266733724da87d9f5f69",
"graspop_2023_lineup/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"graspop_2023_lineup/.git/objects/7e/52be043e195a33575459c1a56a5b1e89b0e6cb": "326043d542924d0dcb842e05ecf07dcd",
"graspop_2023_lineup/.git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
"graspop_2023_lineup/.git/objects/4d/b72e9cb39a691b78e2907d1a72ce71ec3605ae": "94a58b8c37a30be3c0ae05e728b3c7d3",
"graspop_2023_lineup/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"graspop_2023_lineup/.git/objects/9a/ce75d8b6f036532940e62759c7f2c1ee6b1466": "b44e1c243700758d14fa9900dfef870c",
"graspop_2023_lineup/.git/objects/62/d7866c966b657f120fc824d1a186512ed07139": "7230f8090088bef8bb904eb97d934492",
"graspop_2023_lineup/.git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
"graspop_2023_lineup/.git/objects/5e/e25d335bd9e12cc0f2a5aca3c86067819fbb3e": "53db92e3059426fd7ec191630be5ec32",
"graspop_2023_lineup/.git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
"graspop_2023_lineup/.git/objects/99/4727ce95b8e210c12cae51491b508bd38b70bd": "c1680e745fc808d19fbbb60747ffafda",
"graspop_2023_lineup/.git/objects/55/15644f81d528c8f33b50de3a8a0c15fee30a9f": "72b67cd1fc2a103ae583690d01a31817",
"graspop_2023_lineup/.git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
"graspop_2023_lineup/.git/objects/d2/77459f3691c676051956c78e7f4f04941a0e55": "263cda311efcf799bb16a94a95e3ea10",
"graspop_2023_lineup/.git/objects/af/a67420277a6a4ea2bf7c2e41e2a2671653ae73": "15d31e541c96d3b937bc4de8c52e7812",
"graspop_2023_lineup/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"graspop_2023_lineup/.git/objects/b0/efaa83de4730de7282f3ee3c41e64f8c59d2b5": "bb2e5167e3073dbfcde7a90120725ce8",
"graspop_2023_lineup/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"graspop_2023_lineup/.git/objects/b9/5cb3092530282f3f5c9c091d4ddad487569725": "abb099b48f91a199b45413cdebb9c4fa",
"graspop_2023_lineup/.git/objects/e1/6ccb45089f381aedd61c8bbb92a2e4ef905b66": "257b0add3ec836b6d1f1c12cb8c120c3",
"graspop_2023_lineup/.git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
"graspop_2023_lineup/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"graspop_2023_lineup/.git/objects/46/7a6b15b67c664e081f6fad9fa48c0cb86eb5d0": "86e5f9858ee6758004c23dd7a6c86453",
"graspop_2023_lineup/.git/objects/2c/eaa4b655b795e53e17c653b5eda9df7dc4c117": "d9a845237d4e748601eb148345835bee",
"graspop_2023_lineup/.git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
"graspop_2023_lineup/.git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
"graspop_2023_lineup/.git/objects/23/7ac92467d29834b576900080a36d5396dcddfe": "40301915f4b87206a82d0489fa71de7d",
"graspop_2023_lineup/.git/objects/8c/29939eca764f3b0485c317017139d95ab4ba26": "e7839e9d7db4415efe115457f1446566",
"graspop_2023_lineup/.git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
"graspop_2023_lineup/.git/objects/71/4652e67fa60e98f93aa3bb8a2459ec2f108af8": "7dbc87e65f7324a0527f942ccd22d0e3",
"graspop_2023_lineup/.git/objects/49/4e35e955e8c5dd37bc71428d72121d2ed981a3": "62b620d7716a7973cfb6405f144181bb",
"graspop_2023_lineup/.git/objects/2e/460ece159d427230b15450d631e6a839681e83": "5df6850e01fad8015831876c9448d0c5",
"graspop_2023_lineup/.git/objects/2b/4c42c177dd674ff6d61d5b03a85463bd9704fd": "92a692f437d9c8479a89fe1cfa863e78",
"graspop_2023_lineup/.git/objects/13/856eafe89dd413997f61a11b7c9ecff203d2bc": "1a580aed4600171cb89b1738b333bb67",
"graspop_2023_lineup/.git/objects/13/0509ab41ff4b612d00710c3ca98301e5c3cbc4": "975b9b6b92be5ddf740702f3653708ed",
"graspop_2023_lineup/.git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
"graspop_2023_lineup/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"graspop_2023_lineup/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"graspop_2023_lineup/.git/logs/HEAD": "424f3848b2eaa5129fcaba0df874a580",
"graspop_2023_lineup/.git/logs/refs/heads/main": "424f3848b2eaa5129fcaba0df874a580",
"graspop_2023_lineup/.git/logs/refs/remotes/origin/HEAD": "fad72c18fb55e1cc9aedd6478588911d",
"graspop_2023_lineup/.git/logs/refs/remotes/origin/main": "bf6a70138dfd91eee5c656e260aeb958",
"graspop_2023_lineup/.git/description": "b06a06930870a12206c886ef69fb41df",
"graspop_2023_lineup/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"graspop_2023_lineup/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"graspop_2023_lineup/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"graspop_2023_lineup/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"graspop_2023_lineup/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"graspop_2023_lineup/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"graspop_2023_lineup/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"graspop_2023_lineup/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"graspop_2023_lineup/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"graspop_2023_lineup/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"graspop_2023_lineup/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"graspop_2023_lineup/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"graspop_2023_lineup/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"graspop_2023_lineup/.git/refs/heads/main": "9ad37bc04894b244fedfc76c131d1d3c",
"graspop_2023_lineup/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"graspop_2023_lineup/.git/refs/remotes/origin/main": "9ad37bc04894b244fedfc76c131d1d3c",
"graspop_2023_lineup/.git/index": "a2340a0a38759bde6cc777686a7d236d",
"graspop_2023_lineup/.git/COMMIT_EDITMSG": "c5e1670a76fa30eb5c8cb1969cb58536",
"graspop_2023_lineup/.git/FETCH_HEAD": "e218c3a0d6adcadbbc545a07cdaba0dc",
"graspop_2023_lineup/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"graspop_2023_lineup/assets/NOTICES": "908de56fdb4fc0519aeace8a4294632a",
"graspop_2023_lineup/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"graspop_2023_lineup/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"graspop_2023_lineup/assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"graspop_2023_lineup/assets/AssetManifest.smcbin": "a3d922a0b0bb96200631d1d9f758ce7d",
"graspop_2023_lineup/assets/fonts/MaterialIcons-Regular.otf": "b9b380219018443c049bc006003bcd0b",
"graspop_2023_lineup/canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"graspop_2023_lineup/canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"graspop_2023_lineup/canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"graspop_2023_lineup/canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"graspop_2023_lineup/canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"graspop_2023_lineup/canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"graspop_2023_lineup/canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"main.dart.js": "db8b7ae14544fe1612cd49909ecc77dc",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"index.js": "88fa2730cf7ab4fd9846ebee6ab06da6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a2b9cc39cdda27c173e5b6552787e21d",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "dd82642c37768b94f8e78680c322f259",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "a3d922a0b0bb96200631d1d9f758ce7d",
"assets/fonts/MaterialIcons-Regular.otf": "d92597c079e5b35cbad35c6f9310092f",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
