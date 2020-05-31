##The Good Beauty

- [Project Planning](#project-planning)
  - [Overview](#overview)
  - [Wireframes](#wireframes)
  - [MVP](#mvp)
    - [Goals](#goals)
    - [Libraries](#libraries)
    - [Data](#data)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Component Estimates](#component-estimates)
    - [Helper Functions](#helper-functions)
  - [Post-MVP](#post-mvp)
- [Project Delivery](#project-delivery)
  - [Code Showcase](#code-showcase)
  - [Code Issues & Resolutions](#code-issues--resolutions)

<br>

### Overview

**The Good Beauty**

**Project Description**

The Good Beauty is an e-commerce site for beauty products. The site is built on "makeup api".  Users will be able to search prodcuts by brand, categories etc.. 

<br>

### Wireframes
#### Homepage 
![](assets/Homepage.png)
#### Shopping Page 
![](assets/ShopPage.png)
#### Product Details Page 
![](assets/product-details-page.png)
#### Sign in and Sign Up page 
![](assets/sign-in-page.png)

<br>

### MVP

1. The site will allow users to browse through beauty products by brands/categories.
2. The site will render a different categories/brands page when clicked.
3. The site will render a product page when a product is clicked.
4. Users will be able search for products by name, brand, concern, etc...


<br>

#### Goals

- _search for products by category/brand name_
- _drop down list with relevant sub categories_
- _sign in and sign up up with user auth functionality_
- _small screen friendly. 

<br>

#### Libraries

> Use this section to list all supporting libraries and their role in the project.

|      Library      | Description                                   |
| :---------------: | :-------------------------------------------- |
|   React Router    | allow routing through pages                   |
| React Material UI | css design                                    |
| axios | fetch api data                                   |
| Firebase (post MVP) | to allow user's to login/register with google |

<br>

#### Data

> Use the Data Section to define the API(s) you will be consuming for your project, inluding sample URL queries.

|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| makeup API |      yes      | _https://makeup-api.herokuapp.com/_ | _http://makeup-api.herokuapp.com/api/v1/products.json?brand=clinique_ |

```
[
    {
        "id": 1048,
        "brand": "colourpop",
        "name": "Lippie Pencil",
        "price": "5.0",
        "price_sign": "$",
        "currency": "CAD",
        "image_link": "https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769",
        "product_link": "https://colourpop.com/collections/lippie-pencil",
        "website_link": "https://colourpop.com",
        "description": "Lippie Pencil A long-wearing and high-intensity lip pencil that glides on easily and prevents feathering. Many of our Lippie Stix have a coordinating Lippie Pencil designed to compliment it perfectly, but feel free to mix and match!",
        "rating": null,
        "category": "pencil",
        "product_type": "lip_liner",
        "tag_list": [
            "Vegan",
            "cruelty free"
        ],
```

<br>

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app.

```
src
|__ assets/
      |__ data-tests
      |__ mockups
|__ components/
      |__ header/
            |__ header.component.jsx
            |__ header.styles.css
      |__ footer/
            |__ footer.component.jsx
            |__ footer.styles.css
      |__ search/
            |__ search.component.jsx
            |__ search.styles.css
      |__ nav-links/
            |__ nav-links.component.jsx
            |__ nav-links.styles.css
      
|__ pages/
      |__ home/
            |__ home.component.jsx
            |__ home.styles.css
      |__ shop/
            |__ shop.component.jsx
            |__ shop.styles.css
      |__ product-detail/
            |__ detail.component.jsx
            |__ detail.styles.css
      |__ sign-in-sign-up/
            |__ sign-in-sign-up.component.jsx
            |__ sign-in-sign-up.styles.css
```

<br>

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | State | Props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | The header will contain a brief intro and link to Login/Register page.|
|  Navigation  | functional |   y   |   y   | Each navigation item(being 5 categories) will provide a list of links to each of the pages.|
|   Shop Page  | functional |   y   |   y   | The shoppage will render each product by category/brand.    |
|  Produc Page | functional |   y   |   y   | The Product page will have a detail description of the clicked.|    
|  Sign in Sign up page | functional |   y   |   y   | The Product page will have a detail description of the page clicked with customer reviews.|  
|    Footer    | functional |   n   |   n   | The footer will show info about me and a link to my portfolio. |

<br>

#### Component Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.
>
> Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create pages (shop/product/sign in)|    H    |     10 hrs      |    TBD    |    TBD   |
| Create components to be reused in pages|    H     |     10 hrs      |    TBD     |     TBD     |
|  Implement Firebase auth and login|    H     |     10 hrs      |     TBD    |     TBD     |
| CSS |    H     |     15 hrs      |     TBD     |     TBD     |
| TOTAL               |          |     45 hrs      |     3 hrs     |     TBD     |

<br>

#### Helper Functions

> Use this section to document all helper functions, i.e. generic functions that can be reused in other applications.

|  Function  | Description                                |
| :--------: | :----------------------------------------- |
| Capitalize | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

### Post-MVP

- Implement add to cart functionality 
- Add user auth capabilities 

<br>

---

## Project Delivery

### Code Showcase

```
code snippet here
```

### Code Issues & Resolutions

