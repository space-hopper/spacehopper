const frogImages = [
  'https://cdn.joules.com/medias/FOJ-2069-froglmp-BASE-product-image-1-Marketplace-WorkingFormat-Marketplace-Converted-Zoom?context=bWFzdGVyfG1pcmFrbHwzMTI1OTF8aW1hZ2UvanBlZ3xzeXMtbWFzdGVyL21pcmFrbC9oMTIvaGMzLzk0Nzg3Njc5NjgyODYvRk9KLTIwNjktZnJvZ2xtcC1CQVNFX3Byb2R1Y3QtaW1hZ2UtMV9NYXJrZXRwbGFjZS1Xb3JraW5nRm9ybWF0X01hcmtldHBsYWNlLUNvbnZlcnRlZC1ab29tfDZjYjU0Yzc1YjZiYjRiZWI5MDg1Y2IwZTdmMDBmNjE5NjI5ZTM3ODc3YWQ1YjBlNjEyZjRlOGZkNThkYWEwYjI',

  'https://images-na.ssl-images-amazon.com/images/I/51Ej3N9YlSL._AC_SX466_.jpg',

  'https://i.pinimg.com/originals/04/0a/ac/040aac091609fbf81ecf8c567a6d258a.jpg',

  'https://cdn11.bigcommerce.com/s-ob7m2s98/images/stencil/2000x2000/products/17907/63651/frog2__83793.1582212815.png?c=2',

  'https://images-na.ssl-images-amazon.com/images/I/51faCZDXDrL._AC_SX466_.jpg',

  'https://ae01.alicdn.com/kf/Hd8526c0727da4501a66f08b33706dc69Z/Frog-and-Bear-Flocking-Bath-Mat-Home-Decoration-Door-Mat-Non-slip-Absorbent-Bathroom-Doormat-Super.jpg_Q90.jpg_.webp',

  'https://img.btdmp.com/10081/10081736/products/0x1080@16025039081d7e41133d.jpeg',

  'https://www.jmdecorandmore.net/image/cache/data/product/kermit-green-frog-youth-chair-1161-750x750.jpg',

  'https://a.1stdibscdn.com/delphin-massier-majolica-frog-posy-vase-for-sale/1121189/f_182795221584044114977/18279522_master.jpg?width=768',

  'https://images-na.ssl-images-amazon.com/images/I/71eEeJ-36tL._AC_SL1500_.jpg',

  'https://www.boodee.net/v/vspfiles/photos/FW104-2T.jpg',

  'https://www.boodee.net/v/vspfiles/photos/FW123-2T.jpg',

  'https://cdn1.bigcommerce.com/server2500/e45f2/products/1523/images/4564/240464__87549.1503612519.1280.1280.jpg?c=2',

  'https://www.boodee.net/v/vspfiles/photos/FW23-2T.jpg',

  'https://s.yimg.com/aah/yhst-83547458988818/rock-star-frog-garden-sculpture-11.jpg',

  'https://images-na.ssl-images-amazon.com/images/I/619bPFRS-GL._AC_SL1097_.jpg',

  'https://media.kohlsimg.com/is/image/kohls/3665898?wid=600&hei=600&op_sharpen=1',

  'https://cdn11.bigcommerce.com/s-km30nn7y/images/stencil/1280x1280/products/423638/698581/apifz0kcn__57221.1592505478.jpg?c=3',

  'https://secure.img1-fg.wfcdn.com/im/70905153/compr-r85/6233/62334074/buckets-the-garden-frog-statue.jpg',

  'https://i5.walmartimages.com/asr/fe4eb83a-d368-4473-9427-e806f9e140c4_1.b58d83c1d86702c96e58f2c9b0c3bdb0.jpeg',

  'https://i.ebayimg.com/00/s/OTAwWDk4Mw==/z/MQ8AAOSwl9BWISOF/$_57.JPG?set_id=880000500F',

  'https://www.top-10-food.com/wp-content/uploads/2021/03/Ten-Amazing-Frog-Kitchen-Gadgets-for-All-Kermit-Fans-7.jpg',

  'https://i.pinimg.com/originals/ae/a3/1d/aea31dc05bc9811cf94223ea09fe9833.jpg',

  'https://i5.walmartimages.com/asr/88139d37-b512-4cdf-a9bc-0525be9dd512_1.f9717b776204bb71cf8bff8cc95a0a6a.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff',

  'https://i5.walmartimages.com/asr/86e6b5b8-ee05-42b5-b354-80d36352433d_1.7d1220629fc7ae4afe3dffbd13bd9c36.jpeg',

  'https://www.scullyandscully.com/productimages/image.axd/f.31526/w.900/h.900/green+frog+salad+++dessert+plates%2C+set+of+six.jpg',

  'https://secure.img1-ag.wfcdn.com/im/47639788/compr-r85/7408/74089578/frog-porcelain-decorative-plate.jpg',

  'https://i.pinimg.com/originals/70/9c/12/709c12af6968f4e2ed8929b267abf20f.jpg',

  'https://chairish-prod.freetls.fastly.net/image/product/sized/3ab12a19-2415-44ce-816d-49e76da64a07/vintage-brass-frog-bookends-a-pair-3787?aspect=fit&height=1600&width=1600',

  'https://i0.wp.com/froggifts.com/wp-content/uploads/2018/11/bbbookendstand1.jpg?fit=350%2C284&ssl=1',

  'https://www.scullyandscully.com/productimages/image.axd/f.76650/w.900/h.900/austrian+bronze+frog+painting+the+sch%C3%B6nbrunn+palace.jpg',

  'https://i5.walmartimages.com/asr/79f21ad9-3185-4a13-b436-971f6a939e3e_1.2672641d77142dd28f6bc1ede197fd0e.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff',

  'https://m.media-amazon.com/images/I/51yyk1KLYoL._AC_SS450_.jpg',

  'https://i5.walmartimages.com/asr/df9bb24b-c4c8-4779-8309-8cadf66d49f5_1.d2b0f9378bc3912f5e972c15702b9ba2.jpeg',

  'https://images-na.ssl-images-amazon.com/images/I/61UWuM5RWpL._AC_SL1040_.jpg',

  'https://images.lookhuman.com/render/standard/aAPU3g2vPVYIlImsEAgAqbbu3SwdUUCE/mug11oz-whi-one_size-t-live-laugh-frog.jpg',

  'http://mobileimages.lowes.com/product/converted/100244/1002448652.jpg',

  'https://www.plowhearth.com/medias/sys_master/images/images/ha9/hf0/8871310983198/13681x.jpg',

  'https://www.dhresource.com/0x0/f2/albu/g10/M00/68/3D/rBVaWV2F2jWATrnDAAam_FaNkRM585.jpg/high-quality-5-style-cartoon-animal-frog.jpg',

  'https://images-na.ssl-images-amazon.com/images/I/51iO73%2BNHtL._AC_SX522_.jpg',

  'https://images-na.ssl-images-amazon.com/images/I/61VdefwH5-L._AC_SX466_.jpg',

  'https://cache.desktopnexus.com/thumbseg/2299/2299274-bigthumbnail.jpg',

  'https://wehse.files.wordpress.com/2012/01/afrogcar1.jpg?w=584',

  'https://images-na.ssl-images-amazon.com/images/I/51PCCN-lw3L._AC_SX466_.jpg',

  'https://i.etsystatic.com/5524342/r/il/ce5bce/701561546/il_570xN.701561546_h0zp.jpg',

  'https://sep.yimg.com/ay/yhst-17215606132318/pecoware-frog-best-buddy-kids-plush-slippers-2.gif',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSptVC7fAfbQLpUFDhwujLriN-P9uIo1rlEOA&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoGKtDLUHqnlKa25TjRRQh85kx6YNarNzjk4gG5HI0meT0j48ME4UVPRE3jkrojs6vSMcmPRc&usqp=CAc',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmUX_6NK0sXUSxx461Y6tDpyii81WgY_j69A&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYuflPuQ8UqovB0HFHMo9VbaSsTxeqENW0AQ&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzEJz_7oxDmS2obNp4XaEPpwZVQVU9Lt7QhA&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVODFIJwAm8SCQOJOhRhATp5rmGxPcmVBpjA&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnFdInm4pjqJWIC0cldbGQ9VmrUDUzritubw&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtg56jT4Q1KhWxxdoteXQP_gnpBE_h9zB4Jw&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpQKHIH4Ex3YviPqkFLqFBDBFK4rQqDUZRSTHNVWHYbZYwk5Vhhez4Pi7iug&usqp=CAc',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrZ-Z-5tcQAw24O0rhNadleZtIrSWakLnW8A&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn_myOJ8YbFrk-QVkS7P7v_INxGEOoNauIRQ&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJcmOMPNMUn3MgDaHSfG83Zb7C9HESIAZcfg&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQugHhTYMXGJLvKEO7zm0WLuUbZHW2QURoOqw&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_OnI5RjT91IDyMtQlTzFMNJDs9l6iRBvdg&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdF6fRsnwrBU6f1noD4yXubKjHLbTllAerA&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9NT5JaEAQdR_xj3il7KxgDKlhZCfLU8ve5w&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDtKVFOaWa9lVM9jCupiAU2ZSxmwA8GsK6w&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRve0wbG675IyxozEdrXmZdOIOHLBcgPLlBJw&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4jtl2_G8Q49FUCQ8Ro17AtouO5TcZb6kBVQ&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1x5l2cBPpB8shle_9ldxG1nZHh_RTJht2cg&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrMrwQu_pmHFIrv-fmaPgkRXHzrujGiSwljg&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSze-9n4fIl6EiRZvSfWmzNcyrmf7KWiwX8aQ&usqp=CAU',

  'https://images-na.ssl-images-amazon.com/images/I/71gsM5IXh8L._AC_SX425_.jpg',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXLrEU8BbchlNeZkkVwbuxz_WODrzcZAfvWVBgRT5lfRG0qBw0c0yqr3y0ZXht6YKStP4mqIpB&usqp=CAc',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtFppfz7y8QwV8NXec71rmD6RLGQCDyZIkh_bGgOurQkLWAgpa4wDBrGUokg&usqp=CAc',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpFs7OUqDeiELSSjjrBhrpO_QP5Whh9BeNvmF3-GCbwcxCuiAhQg27L72SSg&usqp=CAc',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1K_R5CdrSdl1xW7fhhGlqPhVrdtvyPGMZKg&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPksmqEXiJwx28XHTzTWDKcLBUBEvKbRnk9g&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAkbK_JfRrT4LulR7KYI94YSqfgLoWY-Onkw&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWSCkLJS_8jB50WEWZ39YABhSHX0ypqpQuvg&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPDrtkxy4lTEBVQ-pH71yo9AKvEmAO15kiOQ&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwX_QOGQqWmhdtZG8sAZUlF538byWfbwuWNw&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyStZrv-R1ni_AZDFVukuDVvTYJZ6a_ObAKA&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY0iWGqvLsSBnxu9kJl97NLM1kE7noLInewQ&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9S9hVL5PIIQO5-syy7YViAkxNabs6szGzJw&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw46W8xfZDJfzvb1VToCsj2Cj_bciuUN2ynQ&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvythlDGQT9X560o8wlaUAWgry7nYWOK9-Q&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmAL2r8Umg4e2_B0JaQwwGK9dEjbB6RdDNSg&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTALbT0SgLH4K1_52JleuldR5O3FvZ4uXamqw&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34PyIZ657pa53KEgdpi7IdjkEzzpatBKwhA&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHkIhJqGDp__oKd9iN8vOwfpO0AIc3SxDO7w&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH8mgxGOPMMz1-xAc7cXEgmw0e63mtW3Hk8Q&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6UCjqUZQE4nEXH-J_ugx6ins5QNHv4st_AQ&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgMY--aROApRtCuxwx6v760IoHITDt7GFTWg&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGpXjJuqk_uiSUDQm0PSK6Pud6aPWrWbXM_Q&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1-VyxFpcysd-X0OWgd6PB6rKswWTI46qr1A&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9DaKcJ4a71Z-pxs2sbVToDUabzSTpHqedDQ&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8QMI2auToV0Mv8PrUBCrfGmYv4ynLTt1KBA&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCU5WsWn51nX77PgIoCgWEtkK0nqBtqMwMaA&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcDQrdB_EsPT90IQvcfigft_G_dEqVcos6XQ&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3Gwrw1OUfejihqvDc58Va_423Gy6Yr0lVg&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqSOhoSb1RvTFgy3JKPk_w71x3Ee_6A37sw&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Hbi8YXC0zyLJJdAij3pN7SDb1GCS7a9VlQ&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNiFNo3Q4GTdzNhrUyMRI6SmrNEB1TWr9kfg&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXYm0xUg4zWTKJ_kjMKCKYmBdo-YN6vSp-bA&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwl8bFNsOR0i-BhkVXJ3wkGjN9HWWzuw8Apg&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjVc9mfalV6G07wYzW_JA8Vdxie7Fk8tmcbw&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHhToULN-qAS127YpFb3CjoP6AYEzxrKGhwA&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJm-ZnZJncOnP4n_1ax4w5S5smMK2_lqw5OQ&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3rSlJSugyxGc0zig_sjOWKy0o42jEpQ10ew&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRJwoC0j-enmgaEGj_FRYZE5mGsomReDCACQ&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Nv4xvpitcz4DO7iscle4J16lH4FMTD4E1A&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNx2Xu6mFksOLh5T1IrflFfKYpXM9LABQJHw&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8-onDnSdMWAjltcj05_5HCtaamzgPRJ5cQ&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDSVM6k0SXYL92PWbvflLKDkNumUvEUB6HSQ&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROcfyO4Xff8mY_Oqb16cXhsUj2l9yofZcXUA&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU04X25j3r74A8zexq8esqZaeM2luivx3qxg&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUo4Bu0Eu6fjktOyWHhCcck_8vyqeT21GHJw&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRe1URSLtLYPvgBGdFSls0FWmAzMjSatyWPQ&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGKonDb5HEwSiwAE8MxWjec0iPvVaSGJwF1w&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuUVSgCvOwWKYBFp9SlQgp04d-294Kt1kfAA&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxAX5vrOnxKsLWm3zg6enFWRKiKrTxS0PTFA&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb0C-3sZI0WOxFxNKdHNw0NGm664dIsu5gig&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnQq1d9kHwzcuYlNmJJZiNLyJuCW7tIzbVg&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl-koNztqCZ7dAj6sY58zqWWWSQcVt7J50-Q&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkAzpUZEPuLuw9wfkA58HJgqoTlx1At5gr2Q&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCAk_at_wpuN--IXp1obTJxI2SYmsiRn6rDw&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Kt2_CjVHWnVjdvUZDkUVcruDPr77OlOJWQ&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY3eScCpx5szF3H6Aq--wYZZnjqSpn36BBkw&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3bPR-2gJzO_3Qjw84RM2tFzgwO_bcC4fHbMs08r-j_nD2hYvFzyagcWBpAfqvnfk9IK4Q7Vo&usqp=CAc',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq1o-MpTakts2cATcAXUdijkxdIsohnOnspQ&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-El1RwxlOlKIa5UB-dvGt-E-UsKK3ZCYxyA&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbUecWaTsOtZA5VLPxYchNVm0dBf6zSZ7Lnw&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9-Lq71dpJzmtdExzs7qBN__BA286eVDm0pAIaX0dVztDU92-r-EDrR1zs-mY&usqp=CAc',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_fzwRH4bbrwvzTsWABgt0U0patg58xTNSRQ&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxXLOYZ9UUyMRTEUifmcSckjV4ZbBIoHZnPg&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoO1u1-x3qyLUF2k-cJisGrbIv6Q0SGFGLJw&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQhsBXBqPWev1BU2Rh7zyS1i9fHYaXE8FAtQ&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxGSnmU9EzevL_kgcnxI7HqwQlK-nl2MLxHQ&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK3douClRUrLb5__ZA_s_21oIksn-_UwSVfw&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6d5y4GPv288RT8zw8cllHDgIqxmMuDfIe2Q&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ovPaSJWp-Fx8I8asXy_2okbKDN2NKJHvmA&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVE_O5id9gLB4rBY5AUnlTpHRa-GxbOzQxJA&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfHmhAUJ3MWPc4J4v7JUonizVLxYe_eLXr1A&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsLAwFgQ4fweT78AbQCb9QG8blKDzHRI2D0Q&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbzpiI22LwwffqVqgXS8O4FKBZ-xAB5vQ6ZQ&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGuD1bjJUOMAfnbhDpm6Kt7wEds-bhNCnC5g&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_PaLu-QqNULzi18UevOzwwLWqyoITb-KBaQ&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd4OObSfgmYv9i0t8FCG1J2H-qLu9Hc3Y9BA&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyXAvAU-_GSTPglmMgrkko1ArNUZieL1zTzQ&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCyfGfqSeyqQ01_aND-VeqSMfh7ejGBBYpQ&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwdI7u-NMUQCVs5WFive-PL2RxwkOaHNxPXA&usqp=CAU',
];
module.exports = frogImages;
