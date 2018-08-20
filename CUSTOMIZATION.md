## Integration with e-commerce

In this section we'll embed LiveArt designer to HTML page. Prerequisites: running LiveArt docker container.

Complete file: [samples/minimal_integration.html](samples/minimal_integration.html)

1. Include Live Art API library:
    ```js
    <script type="text/javascript" src="lib/iframe-loader.js"></script>
    ```
2. Add HTML container for the editor:
    ```html
    <main id="LiveArtIframe"></main>
    ```
3. Add desired default size for the iframe and it's container (responsive is supported):
    ```css
    <style>
        #LiveArtIframe > iframe {
            width: 910px;
            height: 640px;
            border: none;
        }
    </style>
    ```
4. Add embed script (with link to the docker container) to finally initialize LiveArt editor:
    ```js
    <script type="text/javascript">
        window.onload = function () {
            window.liveArtIframeLoader.load("#LiveArtIframe", "http://localhost:9000/liveart.html");
        }
    </script>
    ```
5. All together in the page with comments (see [html file](samples/minimal-integration.html)):
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <title>LiveArt HTML5 iframe</title>

        <!-- Live Art API script-->
        <script type="text/javascript" src="lib/iframe-loader.js"></script>

        <!-- Live Art API CSS -->
        <style>
            #LiveArtIframe > iframe {
                width: 910px;
                height: 640px;
                border: none;
            }
        </style>

        <!-- Live Art API sample -->
        <script type="text/javascript">
            window.onload = function () {
                // Init LiveArt iframe
                window.liveArtIframeLoader.load("#LiveArtIframe", "http://localhost:9000/liveart.html");
            }
        </script>
    </head>
    <body>
        <!-- LiveArt Iframe container  -->
        <main id="LiveArtIframe"></main>
    </body>
    </html>
    ```

## Customize Place Order

In this section we'll create Order Preview Modal using  LiveArt  API.

Complete file: [samples/place_order_integration.html](samples/place_order_integration.html)

1. Customize LiveArt editor init handler: 
    1. Add config
    2. Add editor init listener
    3. Add Place Order event handler
    ```js
    // Add config to turn off default place order process
    var config = {
        handlers: {
            placeOrder: null
        }
    };

    // LiveArt component url
    var url = "http://localhost:9000/liveart.html";

    window.liveArtIframeLoader.load("#LiveArtIframe", url, config).then(liveArt => {
        window.liveArt = liveArt;
        // Add "Place Order" event handler
        liveArt.on("onPlaceOrder", onPlaceOrder);
    });
    ```
2. Add Place Order handler:
    * argument - saved design id
    * use LiveArt API methods
        * `liveArt.showPreloader(label: string)` - show preloader with text
        * `liveArt.hidePreloader()` - hide active preloader
        * `liveArt.getDesignInformation(designId: string)` - get all design information. See response schema for more details
        * `liveArt.prepareVisuals(designId: string)` - generate PDF/PNG files. See response schema for more details
    ```js
    function onPlaceOrder(designId) {
        liveArt.showPreloader("Finishing design...");

        // get ordered design information
        liveArt.getDesignInformation(designId).then(function (design) {
            // generate PNG/PDF 
            liveArt.prepareVisuals(designId).then(function (visuals) {
                liveArt.hidePreloader();
                // open sample Order Preview Modal
                showModal(designId, design, visuals);
            });
        });

    }
    ```
3. Add sample function to show the result:
    1. `showModal(designId, design, visuals) {...}`
    2. Add Bootstrap UI framework
4. See complete [html file](samples/place_order_integration.html)
    - note: it require custom [css file](samples/css/iframe-loader.css) for Place Order Modal