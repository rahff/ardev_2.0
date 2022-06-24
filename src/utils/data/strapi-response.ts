import { StrapiDataHome } from "src/entities";

export class StrapiResponse {
    homeData(): void {
        // return {
        //     "data": {
        //         "attributes": {
        //             "createdAt": "2022-06-23T22:23:08.412Z",
        //             "updatedAt": "2022-06-23T22:23:10.671Z",
        //             "publishedAt": "2022-06-23T22:23:10.667Z",
        //             "collaborators": {
        //                 "data": [
        //                     {
        //                         "id": 1,
        //                         "attributes": {
        //                             "name": "Walter White",
        //                             "role": "Chief Executive Officer",
        //                             "bio": "Explicabo voluptatem mollitia et repellat qui dolorum quasi",
        //                             "createdAt": "2022-06-23T21:58:00.733Z",
        //                             "updatedAt": "2022-06-23T21:58:08.889Z",
        //                             "publishedAt": "2022-06-23T21:58:08.885Z"
        //                         }
        //                     },
        //                     {
        //                         "id": 2,
        //                         "attributes": {
        //                             "name": "Sarah Jhonson",
        //                             "role": "Product Manager",
        //                             "bio": "Aut maiores voluptates amet et quis praesentium qui senda para",
        //                             "createdAt": "2022-06-23T22:00:26.172Z",
        //                             "updatedAt": "2022-06-23T22:00:27.389Z",
        //                             "publishedAt": "2022-06-23T22:00:27.386Z"
        //                         }
        //                     },
        //                     {
        //                         "id": 3,
        //                         "attributes": {
        //                             "name": "William Anderson",
        //                             "role": "CTO",
        //                             "bio": "Quisquam facilis cum velit laborum corrupti fuga rerum quia",
        //                             "createdAt": "2022-06-23T22:01:58.700Z",
        //                             "updatedAt": "2022-06-23T22:02:00.216Z",
        //                             "publishedAt": "2022-06-23T22:02:00.212Z"
        //                         }
        //                     },
        //                     {
        //                         "id": 4,
        //                         "attributes": {
        //                             "name": "Amanda Jepson",
        //                             "role": "Accountant",
        //                             "bio": "Dolorum tempora officiis odit laborum officiis et et accusamus",
        //                             "createdAt": "2022-06-23T22:03:49.943Z",
        //                             "updatedAt": "2022-06-23T22:03:51.168Z",
        //                             "publishedAt": "2022-06-23T22:03:51.165Z"
        //                         }
        //                     }
        //                 ]
        //             },
        //             "partners": {
        //                 "data": [
        //                     {
        //                         "id": 1,
        //                         "attributes": {
        //                             "createdAt": "2022-06-23T22:04:46.364Z",
        //                             "updatedAt": "2022-06-23T22:04:48.372Z",
        //                             "publishedAt": "2022-06-23T22:04:48.370Z"
        //                         }
        //                     },
        //                     {
        //                         "id": 2,
        //                         "attributes": {
        //                             "createdAt": "2022-06-23T22:05:01.300Z",
        //                             "updatedAt": "2022-06-23T22:05:01.976Z",
        //                             "publishedAt": "2022-06-23T22:05:01.974Z"
        //                         }
        //                     },
        //                     {
        //                         "id": 3,
        //                         "attributes": {
        //                             "createdAt": "2022-06-23T22:05:17.290Z",
        //                             "updatedAt": "2022-06-23T22:05:18.881Z",
        //                             "publishedAt": "2022-06-23T22:05:18.879Z"
        //                         }
        //                     },
        //                     {
        //                         "id": 4,
        //                         "attributes": {
        //                             "createdAt": "2022-06-23T22:05:31.970Z",
        //                             "updatedAt": "2022-06-23T22:05:46.165Z",
        //                             "publishedAt": "2022-06-23T22:05:46.162Z"
        //                         }
        //                     },
        //                     {
        //                         "id": 5,
        //                         "attributes": {
        //                             "createdAt": "2022-06-23T22:05:59.914Z",
        //                             "updatedAt": "2022-06-23T22:06:00.761Z",
        //                             "publishedAt": "2022-06-23T22:06:00.760Z"
        //                         }
        //                     },
        //                     {
        //                         "id": 6,
        //                         "attributes": {
        //                             "createdAt": "2022-06-23T22:06:13.090Z",
        //                             "updatedAt": "2022-06-23T22:06:13.960Z",
        //                             "publishedAt": "2022-06-23T22:06:13.958Z"
        //                         }
        //                     }
        //                 ]
        //             },
        //             "portfolio_items": {
        //                 "data": [
        //                     {
        //                         "id": 1,
        //                         "attributes": {
        //                             "createdAt": "2022-06-23T22:08:28.649Z",
        //                             "updatedAt": "2022-06-23T22:12:47.866Z",
        //                             "publishedAt": "2022-06-23T22:08:29.919Z",
        //                             "title": "first",
        //                             "description": "none"
        //                         }
        //                     },
        //                     {
        //                         "id": 2,
        //                         "attributes": {
        //                             "createdAt": "2022-06-23T22:13:23.071Z",
        //                             "updatedAt": "2022-06-23T22:14:32.056Z",
        //                             "publishedAt": "2022-06-23T22:14:32.053Z",
        //                             "title": "second",
        //                             "description": "none"
        //                         }
        //                     },
        //                     {
        //                         "id": 3,
        //                         "attributes": {
        //                             "createdAt": "2022-06-23T22:13:53.753Z",
        //                             "updatedAt": "2022-06-23T22:14:35.286Z",
        //                             "publishedAt": "2022-06-23T22:14:35.283Z",
        //                             "title": "third",
        //                             "description": "none"
        //                         }
        //                     },
        //                     {
        //                         "id": 4,
        //                         "attributes": {
        //                             "createdAt": "2022-06-23T22:14:21.654Z",
        //                             "updatedAt": "2022-06-23T22:14:38.981Z",
        //                             "publishedAt": "2022-06-23T22:14:38.979Z",
        //                             "title": "fourth",
        //                             "description": "none"
        //                         }
        //                     }
        //                 ]
        //             },
        //             "services": {
        //                 "data": [
        //                     {
        //                         "id": 1,
        //                         "attributes": {
        //                             "icon": "bxl-dribbble",
        //                             "title": "Lorem Ipsum",
        //                             "text": "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
        //                             "createdAt": "2022-06-23T22:16:07.403Z",
        //                             "updatedAt": "2022-06-23T22:16:08.661Z",
        //                             "publishedAt": "2022-06-23T22:16:08.658Z"
        //                         }
        //                     },
        //                     {
        //                         "id": 2,
        //                         "attributes": {
        //                             "icon": "bx-file",
        //                             "title": "Sed ut perspici",
        //                             "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
        //                             "createdAt": "2022-06-23T22:16:50.237Z",
        //                             "updatedAt": "2022-06-23T22:16:50.837Z",
        //                             "publishedAt": "2022-06-23T22:16:50.834Z"
        //                         }
        //                     },
        //                     {
        //                         "id": 3,
        //                         "attributes": {
        //                             "icon": "bx-tachometer",
        //                             "title": "Magni Dolores",
        //                             "text": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
        //                             "createdAt": "2022-06-23T22:17:11.224Z",
        //                             "updatedAt": "2022-06-23T22:17:11.965Z",
        //                             "publishedAt": "2022-06-23T22:17:11.963Z"
        //                         }
        //                     },
        //                     {
        //                         "id": 4,
        //                         "attributes": {
        //                             "icon": "bx-layer",
        //                             "title": "Nemo Enim",
        //                             "text": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
        //                             "createdAt": "2022-06-23T22:20:27.847Z",
        //                             "updatedAt": "2022-06-23T22:20:28.791Z",
        //                             "publishedAt": "2022-06-23T22:20:28.789Z"
        //                         }
        //                     }
        //                 ]
        //             }
        //         }
        //     },
        //     "meta": {}
        // }
    }
}