'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "50b8a61e69b2c98a45da8d0e904fe856",
"version.json": "0e87f2fb306513eae0a45f97f0e6695e",
"splash/img/light-2x.png": "81e5e6c6456c1ff15265b97cae03f2b6",
"splash/img/dark-4x.png": "3aa136d85f9b882e84bd9558df318757",
"splash/img/light-3x.png": "a0d11ff837a787fd3b46ef9b7042e029",
"splash/img/dark-3x.png": "a0d11ff837a787fd3b46ef9b7042e029",
"splash/img/light-4x.png": "3aa136d85f9b882e84bd9558df318757",
"splash/img/dark-2x.png": "81e5e6c6456c1ff15265b97cae03f2b6",
"splash/img/dark-1x.png": "7c10cc44ad42e6fd5445479d4ee39afd",
"splash/img/light-1x.png": "7c10cc44ad42e6fd5445479d4ee39afd",
"index.html": "1de702a5bec93ffedb936371a9194b83",
"/": "1de702a5bec93ffedb936371a9194b83",
"firebase-messaging-sw.js": "1d0f4719eb951699cd4aae180ab6d237",
"main.dart.js": "f3b3b3ee1c96ec3bdd18c1d4681d26e1",
"404.html": "0914ff9a9b52b9838e424560b4458a29",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/firebase_logo.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c0b0b31fc15494a3576d7f306359c4a6",
"assets/NOTICES": "ab1079dd63dab15faee05f99ee5c93c0",
"assets/FontManifest.json": "d79744edacb3428d3e776d26130c6214",
"assets/AssetManifest.bin.json": "c261097cd2cca9b72021969dc3459f32",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/quill_html_editor_v3/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor_v3/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor_v3/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor_v3/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor_v3/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor_v3/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor_v3/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor_v3/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor_v3/assets/scripts/quill_2.0.0_4_min.js": "5a1771d0d53c0028bab67fa1817dd8e7",
"assets/packages/quill_html_editor_v3/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor_v3/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor_v3/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor_v3/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "219b331631aef0ff97bfa58b6dd5c789",
"assets/fonts/Inter-Bold.otf": "d6312ef1e6c284ca5266b4be8f74056e",
"assets/fonts/Inter-Regular.otf": "6b39225d5fa67b3d717db7c92e88c6ad",
"assets/fonts/Inter-Medium.otf": "3bd1056d001e1f22d4842ccfd88e3a5f",
"assets/fonts/Inter-Light-BETA.otf": "4b9c74698ae36b374a12bc39304bf290",
"assets/fonts/Inter-SemiBold.otf": "4276ed3693a662df6ab8091cccfa90d3",
"assets/fonts/Inter-Black.otf": "8eef1d181c64f2adb85ad1c93d62a550",
"assets/fonts/Inter-ExtraBold.otf": "61c3a939e328298696930667081b526b",
"assets/fonts/MaterialIcons-Regular.otf": "9c2c0fea043d285c380638a699463d73",
"assets/assets/locales/en_US.json": "c977bab604598e95644ad8146c541128",
"assets/assets/locales/hi_IN.json": "acd701e55774fce44906b45e5c80d184",
"assets/assets/locales/en_UK.json": "087ea69582cd2802206da2245b2b631f",
"assets/assets/images/c8.png": "4590c6fd9908b7bd0f6dcaa64e488fa5",
"assets/assets/images/c9.png": "4779d6c930cc7b4509a870461cea52d5",
"assets/assets/images/ic_profile.svg": "348a28526be04e3c73680fff21ae469e",
"assets/assets/images/oracle.svg": "660ad1a4959f42408dd59cf488257d56",
"assets/assets/images/ic_my_session.svg": "a7dd780dd02626143fff750e784f9953",
"assets/assets/images/ic_forward.svg": "50077e38f92530a383ad6c6d3f515e11",
"assets/assets/images/general/empty_screen_img.svg": "f78c09ceb8e7ff1c027779730e231b2b",
"assets/assets/images/general/ic_profile.svg": "c14012fb568e6337a33043566ea6bec4",
"assets/assets/images/general/ic_certificate.png": "d37f79db613823d0f84e47d2eb865e65",
"assets/assets/images/general/certificate_bg.svg": "86b7a074a1ba21ffa64339b2073d8bc1",
"assets/assets/images/general/ic_home.svg": "7b85ac55f808551d113b973ec856db76",
"assets/assets/images/general/ic_close.svg": "039bfc67e0f18b45f63a8a399efdc98d",
"assets/assets/images/general/ic_app_store.png": "e1ee20558b124587773150d8b91bbd1f",
"assets/assets/images/general/ic_notification.svg": "44279366020d4e880f8153d1f67e50c0",
"assets/assets/images/general/appriciate.svg": "6f3c35a6f2cc659552c59a55c3fd3935",
"assets/assets/images/general/network_issue_img.svg": "9ec1d35146d064654c7b8511c9f0b388",
"assets/assets/images/general/arc_bg.svg": "4f8623d354a0619e99fe48558d3fbda9",
"assets/assets/images/general/ic_android_download_qr.png": "9c17432701ec7f0a8a6a4d026a579f80",
"assets/assets/images/general/ic_double_tick.svg": "60fd859354d16e5cbc0d843c18436d81",
"assets/assets/images/general/ic_customer_service.svg": "7cf8600cfa3303d03eb2a2c1cbb789df",
"assets/assets/images/general/ic_blog.svg": "30178bcd439b22a8bbefe68f9b378c7d",
"assets/assets/images/general/ic_back_button.svg": "d29ac6e8c2f8ec01acaddcac94f5cd69",
"assets/assets/images/general/ic_forum.svg": "381faaa80654747b56c3e3923756e7fc",
"assets/assets/images/general/jmr_certificate.svg": "39d4951ef451a4a6c4669392f624b787",
"assets/assets/images/general/ic_arrow_down.svg": "0c41f28dd43e5f736184c378f7bd2fd2",
"assets/assets/images/general/certificate_logo.svg": "94ea9b2182a80b26cee6ed12ebbddbed",
"assets/assets/images/general/ic_email.svg": "f4aa6d560b9974823a486e4f404fbdfb",
"assets/assets/images/general/ic_ms_teams.png": "33493103e0863dd35288fbe4de51e8d5",
"assets/assets/images/general/ic_chat.svg": "881abcc7732c0553b44ed624e1f4f236",
"assets/assets/images/general/certificate_top_bg.svg": "54180626d605c008582453030598e40d",
"assets/assets/images/general/ic_default_profile.svg": "230e8f329015c6f4307fd580af11b680",
"assets/assets/images/general/ic_search.svg": "ce2665bbc186799548a24f6964b75a9b",
"assets/assets/images/general/ic_play_store.png": "54a42c31c37db107eb2d5900d7916a77",
"assets/assets/images/general/ic_change_password.svg": "33dcc112ead1ded8ec5d0e68b3ad58a1",
"assets/assets/images/general/ic_emoji_smiley.svg": "98dbbb634ca12cf2c76e3cd237f1135a",
"assets/assets/images/general/ic_edit.svg": "a96d933d86cb102c4f3858bcaecf3823",
"assets/assets/images/general/ic_ios_download_qr.png": "98cdda38514006275b63af3981c1ada6",
"assets/assets/images/ic_home.svg": "6ffce809685d6cf87f1a0ab19a91e66a",
"assets/assets/images/app_icon.svg": "0dcc47d117fff6808200fca8375ea393",
"assets/assets/images/webapp/login_img.png": "0eccece5c072eb92eeb8eff6f4196e3d",
"assets/assets/images/app_icon_png.png": "f9d041e85bbb98fec09cf94bd6db0257",
"assets/assets/images/ic_course_notes.svg": "64d7df7e91f3d7a9714de91ea526c781",
"assets/assets/images/ic_self_enroll.svg": "5cd3a0c0f30fa24c34974e84dbbc354e",
"assets/assets/images/ic_forward_png.png": "3270646dfb3d1652eb50a21b32dd9b90",
"assets/assets/images/emp2.jpg": "cbd4404bf1420de9a8cf7a0a4151dda2",
"assets/assets/images/emp1.jpg": "8310ab709f70727b92fa1a6917897c82",
"assets/assets/images/blog/ic_comment.svg": "987a28c2948328a9a7392a7271fdc34d",
"assets/assets/images/blog/add_image_blog.svg": "c5d306d7731abf2eb15719322aef6c03",
"assets/assets/images/blog/ic_dislikes.svg": "8ff44b23c065827d6a8d4a9cb54c7a58",
"assets/assets/images/blog/ic_camera.svg": "f0ed69eea30ded02ea4fb3cc01c8ca40",
"assets/assets/images/blog/ic_list_unselected.svg": "f5ae2a10d4f6c3b217c63c967dc35fcd",
"assets/assets/images/blog/ic_text_size_14.svg": "21935b08b8076377d76d687a8b187acc",
"assets/assets/images/blog/ic_dislike_outlined.svg": "62d442ba5ff1780b36e213cc4fb5bf65",
"assets/assets/images/blog/default_blog.png": "c23275d272ae0fcd17fba24da4029793",
"assets/assets/images/blog/ic_paste_link.svg": "10e935c038109e72eb55eeec13b4a732",
"assets/assets/images/blog/ic_list_unorderd.svg": "46dab6d8ef3108f52c11466f9ee23df6",
"assets/assets/images/blog/ic_like_outlined.svg": "961f623cd71687863301253529d822a1",
"assets/assets/images/blog/ic_divide.svg": "38298146775ef6e0d43dd3f588bded9e",
"assets/assets/images/blog/ic_text_size_20.svg": "94dc7aa29ad8af72f801eeec382bfd61",
"assets/assets/images/blog/ic_comment_outlined.svg": "afb05251b4a240305764d63276a3dff9",
"assets/assets/images/blog/ic_create_blog.svg": "a96d933d86cb102c4f3858bcaecf3823",
"assets/assets/images/blog/ic_text_size_24.svg": "8cd1ec974aaabcf0355566796f2fd576",
"assets/assets/images/blog/ic_list_orderd.svg": "8507b3ac08d2f3fbc5bc4423975fc4bd",
"assets/assets/images/blog/ic_likes.svg": "a07711236525283e944e1d504a073b0a",
"assets/assets/images/blog/ic_embed_link.svg": "32b9200469d16c9b1d8bb4aa585a02ff",
"assets/assets/images/blog/ic_views.svg": "b8ac9a6b29c6b0e3a9bc24fb555457a7",
"assets/assets/images/default_profile.png": "bcd4d79ef2909f9b7d8332b3a79364ea",
"assets/assets/images/dashboard/ic_play_video.svg": "a01c0b47610fbdbb86a96f4717c3efdc",
"assets/assets/images/dashboard/ic_my_learning.svg": "39cc890ec3068889517d8a8f5b33d96f",
"assets/assets/images/dashboard/ic_quiz_completed.svg": "b5a19b9da0f4d648c94a5c23c5f0fcd9",
"assets/assets/images/dashboard/ic_favorites.svg": "3ab9e1dbe59c9dfe8b44e23411b8ddd1",
"assets/assets/images/dashboard/ic_modules_completed.svg": "944e9cfb454efc2f8c5681d1e930c4ee",
"assets/assets/images/dashboard/ic_achievement_cup.svg": "547df9951de5f061d24a6da0263264c9",
"assets/assets/images/dashboard/ic_course_completed.svg": "ac49e3b999ef14dd3b308a21588984ca",
"assets/assets/images/dashboard/ic_self_enrol.svg": "f6e5c4a3cf0f5f81611a7b59a76d1b3c",
"assets/assets/images/dashboard/ic_enrolled_subject.svg": "b8c8068ed98a08d5612c1ab88da77373",
"assets/assets/images/dashboard/ic_reset_password.svg": "bb73bf1a68322bafe7e0fca53d6bc6c2",
"assets/assets/images/dashboard/ic_leader_board.svg": "0a90e8a64dc8e7691df9f5f181a23766",
"assets/assets/images/dashboard/ic_home.svg": "7db631eb202449db2fbebccbf3ae9642",
"assets/assets/images/dashboard/ic_blogs.svg": "3c81b1a4abd4ae53bf7532f6744a7cc8",
"assets/assets/images/dashboard/ic_notification.svg": "09f9673fa1deaf978403fb0429699794",
"assets/assets/images/dashboard/ic_time_invested.svg": "1a9fe33aee5f4d461503fba1bbf37d5d",
"assets/assets/images/dashboard/ic_badges_earned.svg": "76b62f44867cd612276a423d57cf05f3",
"assets/assets/images/dashboard/ic_assignments_completed.svg": "f249029ed71c65775c363b15a0f913de",
"assets/assets/images/dashboard/ic_self_enroll.svg": "d8341790adcc2897b1027e9019949fbc",
"assets/assets/images/dashboard/ic_forum.svg": "b919b027545efcb4408f95771a2a8343",
"assets/assets/images/dashboard/ic_chat.svg": "e4b74f8744fb0b0332d485062dd66432",
"assets/assets/images/dashboard/ic_my_subjects.svg": "22bcf7dd308c9e501da0e43791bbd5dc",
"assets/assets/images/dashboard/ic_current_streak.svg": "e09b6d8e9dc6866f9ed624567cc7a51f",
"assets/assets/images/dashboard/ic_more.svg": "fc9c86298512aec6e80ca1b7b5c13c1d",
"assets/assets/images/forum/ic_add.svg": "9ee065c09e0c8b769c9eb8946c0f1e5f",
"assets/assets/images/forum/ic_comments.svg": "987a28c2948328a9a7392a7271fdc34d",
"assets/assets/images/forum/ic_reply.svg": "cb7c778a1ed77291f91d494c89d8006c",
"assets/assets/images/forum/ic_ongoing.svg": "c62e8a2772cec745c430fb18941bc5f0",
"assets/assets/images/module4.png": "1ff985c8544e56ac186c63ab718b16ac",
"assets/assets/images/ic_course_ques_set.svg": "220c0641f41ac39a268f747092d83bda",
"assets/assets/images/module3.png": "663817fb3707372c4051457a093f64bf",
"assets/assets/images/module2.png": "1e6ffa6015732d1b5ece0dbc18163165",
"assets/assets/images/ic_course_video.svg": "1c407ab25ca20854ffe879576d6ed6f6",
"assets/assets/images/module1.png": "9bb3c34fc652b58b48df35456170d2b1",
"assets/assets/images/c1.png": "b681646381601b1e22e7bda5dd84df7c",
"assets/assets/images/ic_app_icon.svg": "3755a216daf1863b7a716220503cfaaf",
"assets/assets/images/c2.png": "deb2b21fd9a2da0a9f674aba5fe8c986",
"assets/assets/images/c3.png": "bcf7a87710bccd04a94f26c6b33f6be4",
"assets/assets/images/ic_search.svg": "1ac79bd51bab54bde757a91ea3105926",
"assets/assets/images/ic_course_text_doc.svg": "8ee54e974f64a0bc30765c50188a0b5d",
"assets/assets/images/c7.png": "4ac66f43ebcf41bef0cd4fcbb97781fc",
"assets/assets/images/c6.png": "73a6b3cd26687dc436223a8138ed3017",
"assets/assets/images/ic_oracle.svg": "4556ae94b733620a80ba3ddd819c9bce",
"assets/assets/images/c4.png": "b6a6448ed473f5cf7751d3e19c6e9fab",
"assets/assets/images/ic_video_icon.svg": "ba41ed84cafd98f21919cc1a7d667d31",
"assets/assets/images/gif/loader.gif": "ac33b854776914e124aac6a649d7713b",
"assets/assets/images/c5.png": "77b24ce50cf8f0cd63a99cc6066f85fa",
"assets/assets/files/casa_assignment.pdf": "16adf582ad0a7b1b00d43d1c445b3783",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
