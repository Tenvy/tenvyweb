// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const projectdata = [
    { id: 1, name: "Tenjin Fan-Site", image:"/tenjin.png", description:"Tenjin Style is a fansite website that offers a collection of high-quality products with a Japanese theme that is uniquely designed by their own designer. They have a unique collection of Japanese-styled products, including mousepads made of high-quality materials and decorated with their own unique designs.", banner:"/tenjinpreview.png", link:"https://tenjinstyle.netlify.app" },
    { id: 2, name: "Tenvynime", image:"/tenvynime.jpg", description:"Tenvynime is an anime information website that provides the latest updates and reviews on various types of anime from Japan and around the world. The site offers complete information about popular and trending anime, including plot synopses, characters, airing schedules, and trailers of currently showing anime.", banner:"/tenvynimepreview.png", link:"https://tenvynime.netlify.app" },
  ];
  res.status(200).json(projectdata);
}
