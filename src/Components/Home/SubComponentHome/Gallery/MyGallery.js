import { Button, Box } from "@material-ui/core";
import React from "react";
import { useStyle } from "./Style";
import Gallery from "react-grid-gallery";
export default function MyGallery() {
  const IMAGES = [
    {
      src: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
      thumbnail:
        "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg",
      thumbnailWidth: 271,
      thumbnailHeight: 320,
      // tags: [{ value: "Any name", title: "Any name | Flowers" }],
      caption: "Orange Macro (Tom Eversley - isorepublic.com)",
    },
    {
      src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
      thumbnail:
        "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 190,
      // tags: [
      //   { value: "place Name", title: "place Name" },
      //   { value: "any Name | any Name", title: "any Name | any Name" },
      //   { value: "any name", title: "Any Name" },
      // ],
      // caption: "jkjk",
    },
    {
      src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
      thumbnail:
        "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 148,
      // tags: [
      //   { value: "place Name", title: "place Name" },
      //   { value: "any Name | any Name", title: "any Name | any Name" },
      //   { value: "any name", title: "Any Name" },
      // ],
      // caption: "jkjk",
    },
    {
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-TPgTNQD-9ZMse7A7uXWLuw1pQb3k5pjZBQ&usqp=CAU",
      thumbnail:
        "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      caption: "201H (gratisography.com)",
    },
    {
      src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
      thumbnail:
        "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg",
      thumbnailWidth: 248,
      thumbnailHeight: 320,
      caption: "Big Ben (Tom Eversley - isorepublic.com)",
    },
    {
      src: "https://c1.staticflickr.com/9/8785/28687743710_870813dfde_h.jpg",
      thumbnail:
        "https://c1.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 113,
      tags: [
        // { value: "People", title: "People" },
        // { value: "Industrial", title: "Industrial" },
      ],
      caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)",
    },

    // {
    // src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
    // thumbnail:
    //   "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
    // thumbnailWidth: 320,
    // thumbnailHeight: 813,
    // tags: [{ value: "Any name", title: "Any name | Flowers" }],
    // caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
    // },
    {
      src: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
      thumbnail:
        "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg",
      thumbnailWidth: 271,
      thumbnailHeight: 320,
      // tags: [{ value: "Any name", title: "Any name | Flowers" }],
      caption: "Orange Macro (Tom Eversley - isorepublic.com)",
    },
    {
      src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
      thumbnail:
        "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 190,
      // tags: [
      //   { value: "place Name", title: "place Name" },
      //   { value: "any Name | any Name", title: "any Name | any Name" },
      //   { value: "any name", title: "Any Name" },
      // ],
      // caption: "jkjk",
    },
    {
      src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
      thumbnail:
        "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 148,
      // tags: [
      //   { value: "place Name", title: "place Name" },
      //   { value: "any Name | any Name", title: "any Name | any Name" },
      //   { value: "any name", title: "Any Name" },
      // ],
      // caption: "jkjk",
    },
    {
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-TPgTNQD-9ZMse7A7uXWLuw1pQb3k5pjZBQ&usqp=CAU",
      thumbnail:
        "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      caption: "201H (gratisography.com)",
    },
    {
      src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
      thumbnail:
        "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg",
      thumbnailWidth: 248,
      thumbnailHeight: 320,
      caption: "Big Ben (Tom Eversley - isorepublic.com)",
    },
    {
      src: "https://c1.staticflickr.com/9/8785/28687743710_870813dfde_h.jpg",
      thumbnail:
        "https://c1.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 113,
      tags: [
        // { value: "People", title: "People" },
        // { value: "Industrial", title: "Industrial" },
      ],
      caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)",
    },

    // {
    // src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
    // thumbnail:
    //   "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
    // thumbnailWidth: 320,
    // thumbnailHeight: 813,
    // tags: [{ value: "Any name", title: "Any name | Flowers" }],
    // caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
    // },
    {
      src: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
      thumbnail:
        "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg",
      thumbnailWidth: 271,
      thumbnailHeight: 320,
      // tags: [{ value: "Any name", title: "Any name | Flowers" }],
      caption: "Orange Macro (Tom Eversley - isorepublic.com)",
    },
    {
      src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
      thumbnail:
        "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 190,
      // tags: [
      //   { value: "place Name", title: "place Name" },
      //   { value: "any Name | any Name", title: "any Name | any Name" },
      //   { value: "any name", title: "Any Name" },
      // ],
      // caption: "jkjk",
    },
    {
      src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
      thumbnail:
        "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 148,
      // tags: [
      //   { value: "place Name", title: "place Name" },
      //   { value: "any Name | any Name", title: "any Name | any Name" },
      //   { value: "any name", title: "Any Name" },
      // ],
      // caption: "jkjk",
    },
    {
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-TPgTNQD-9ZMse7A7uXWLuw1pQb3k5pjZBQ&usqp=CAU",
      thumbnail:
        "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      caption: "201H (gratisography.com)",
    },
  ];

  const classes = useStyle();
  return (
    <Box className={classes.galleryContainer}>
      <Box className={classes.galleryTitle}>
        <Button enableElevation variant="contained" className={classes.btn}>
          lorem ipsum dolor sit amet
        </Button>
        <p className={classes.paragraph}>
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do minim
          veniam, quis nostrud exercitation ullamco weorh
        </p>
      </Box>
      <Box className={classes.gallery}>
        <Gallery
          images={IMAGES}
          isSelected={false}
          enableLightbox={true}
          enableImageSelection={false}
        />
      </Box>
    </Box>
  );
}
