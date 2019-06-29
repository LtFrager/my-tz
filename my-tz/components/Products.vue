<template>
  <v-layout row wrap>
    <v-flex xs12 sm4 md3 lg3 class="media-padding">
      <v-card color="filter">
        <div class="myDropdown" v-for="(item,i) in dataFilter" :key="i">
          <h3 class="filterTitle" v-on:click="item.isActive = !item.isActive" v-bind:class="{ active: item.isActive }">
            {{item.title}}</h3>
          <ul class="DropdownUlLvl1" v-for="(item2,i) in item.itemsData" :key="i">
            <li>
              <label>
                <input type="checkbox" v-on:click="addChecked(item2.id)" value="1" :id="item2.id">{{item2.name}}
              </label>

              <span v-if="item2.itemsDatalvl2" v-on:click="item2.isActive = !item2.isActive"
                v-bind:class="{ active: item2.isActive }">
                <img src="../static/arrow.png" alt="">
              </span>

              <ul class="DropdownUlLvl2" v-if="item2.itemsDatalvl2">
                <li v-for="(item3,i) in item2.itemsDatalvl2" :key="i">
                  <label>
                    <input type="checkbox" v-on:click="addChecked(item3.id)">{{item3.name}}
                  </label>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </v-card>
    </v-flex>

    <v-flex xs12 sm8 md9 lg9>
      <div class="selectFilter"> <span>Сортувати</span>
        <select v-model="selectFilter">
          <option value="1">Цена Убывание</option>
          <option value="2">Цена Возрастание</option>
          <option selected value="3">Популярность</option>
        </select> </div>

      <v-layout row wrap>

        <v-flex xs12 sm6 md4 v-for="item in filteredProducts" :key="item" style="padding:15px;">
          <v-card class="item">
            <img src="../static/product-img.jpg" alt="img">
            <a class="item-link" :href="item.link">{{item.descr}}</a>
            <div>
              <br>price {{item.price}} <br>
              rait {{item.raiting}} <br>
              categ {{item.categories}}
            </div>
          </v-card>
        </v-flex>

      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    computed: {
      filteredProducts() {
        let products = this.products.sort(this.compare)
        if (this.checked != '') {
          return products.filter(item => {
            return item.categories.some(v => this.checked.indexOf(v) !== -1);
          })
        }
        return products
      }
    },
    methods: {
      addChecked(id) {
        if (this.checked.indexOf(id) != -1) {
          this.checked.splice(this.checked.indexOf(id), 1)
        } else {
          this.checked.push(id)
        }
      },
      compare(a, b) {
        var sort = this.selectFilter
        if (sort == 2) {
          if (a.price < b.price)
            return -1;
          if (a.price > b.price)
            return 1;
          return 0;
        }
        if (sort == 1) {
          if (a.price > b.price)
            return -1;
          if (a.price < b.price)
            return 1;
          return 0;
        }
        if (sort == 3) {
          if (a.raiting > b.raiting)
            return -1;
          if (a.raiting < b.raiting)
            return 1;
          return 0;
        }
      }
    },
    data() {
      return {
        checked: [],
        selectFilter: 1,

        dataFilter: [{
            title: ' Серия',
            isActive: true,
            itemsData: [{
                name: 'Baby line',
                id: 1,
                isChecked: false,
                lvl2: []
              },
              {
                name: 'Kids line',
                id: 2,
                isChecked: false,
                lvl2: []
              },
              {
                name: 'Line Smart',
                id: 3,
                isChecked: false,
                lvl2: []
              },
              {
                name: 'Art line',
                id: 4,
                isChecked: false,
                lvl2: []
              }
            ]
          },

          {
            title: ' Товари для творчості',
            isActive: true,
            itemsData: [{
                name: 'Малювання',
                isActive: true,
                id: 5,
                isChecked: false,
                itemsDatalvl2: [{
                    name: 'Кольорові олівці',
                    id: 51,
                    isChecked: false,
                  },
                  {
                    name: 'Фарби',
                    id: 52,
                    isChecked: false,
                  },
                  {
                    name: 'Пензлі',
                    id: 53,
                    isChecked: false,
                  },
                  {
                    name: 'Крейда',
                    id: 54,
                    isChecked: false,
                  },
                  {
                    name: 'Фломастери',
                    id: 55,
                    isChecked: false,
                  },
                  {
                    name: 'Ліплення',
                    id: 56,
                    isChecked: false,
                  }
                ]
              },
              {
                name: 'Ліплення',
                id: 6,
                isChecked: false,
                lvl2: []
              },
            ],
          },
        ],

        products: [{
            img: '/static/product-img.jpg',
            id: 1,
            raiting: 1,
            price: 100,
            descr: 'тут обьект карандаши сосвойствами серии, товардля творчості и метками сортировки',
            link: '#',
            categories: [1, 2]
          },
          {
            img: '/static/product-img.png',
            id: 2,
            raiting: 2,
            price: 300,
            descr: 'тут обьект карандаши сосвойствами серии, товардля творчості и метками сортировки',
            link: '#',
            categories: [3]
          },
          {
            img: '/static/product-img.png',
            id: 3,
            raiting: 3,
            price: 500,
            descr: 'тут обьект карандаши сосвойствами серии, товардля творчості и метками сортировки',
            link: '#',
            categories: [1, 2, 5, 7]
          },
          {
            img: '/static/product-img.png',
            id: 4,
            raiting: 2,
            price: 100,
            descr: 'тут обьект карандаши сосвойствами серии, товардля творчості и метками сортировки',
            link: '#',
            categories: [1, 2, 3]
          },
          {
            img: '/static/product-img.png',
            id: 5,
            raiting: 1,
            price: 100,
            descr: 'тут обьект карандаши сосвойствами серии, товардля творчості и метками сортировки',
            link: '#',
            categories: [52]
          },
          {
            img: '/static/product-img.png',
            id: 6,
            raiting: 1,
            price: 500,
            descr: 'тут обьект карандаши сосвойствами серии, товардля творчості и метками сортировки',
            link: '#',
            categories: [52, 53, 55]
          },
          {
            img: '/static/product-img.png',
            id: 7,
            raiting: 5,
            price: 200,
            descr: 'тут обьект карандаши сосвойствами серии, товардля творчості и метками сортировки',
            link: '#',
            categories: [9]
          },
          {
            img: '/static/product-img.png',
            id: 8,
            raiting: 1,
            price: 100,
            descr: 'тут обьект карандаши сосвойствами серии, товардля творчості и метками сортировки',
            link: '#',
            categories: [1, 54, 7]
          },
          {
            img: '/static/product-img.png',
            id: 9,
            raiting: 2,
            price: 100,
            descr: 'тут обьект карандаши сосвойствами серии, товардля творчості и метками сортировки',
            link: '#',
            categories: [8]
          },
        ],
      }
    },
  }
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }

  ul li label {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 1.13;
    color: #2d2d2d;
    display: flex;
    align-items: center;
  }

  .filter {
    padding: 23px 16px 38px 30px;
    margin-bottom: 20px;
  }

  .filterTitle {
    height: 16px;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.13;
    color: #242424;
    margin-bottom: 26px;
    padding-right: 10px;
    background: url('../static/triangle.png') no-repeat right;
    cursor: pointer;
  }

  .DropdownUlLvl1 {
    padding-right: 15px;
    margin-bottom: 20px;
    display: none;
    transform-origin: top;

  }

  .DropdownUlLvl1 li {
    margin-bottom: 18px;
    position: relative;
  }

  .DropdownUlLvl1 li input {
    margin-right: 19px;
  }

  .DropdownUlLvl2 {
    margin-top: 18px;
    margin-left: 18px;
  }

  .DropdownUlLvl2 li {
    margin-bottom: 15px;
  }

  .DropdownUlLvl2 li input {
    margin-right: 14px;
  }

  .filterTitle.active~.DropdownUlLvl1 {
    display: block;
    transition: .5s;
  }

  .DropdownUlLvl1 span {
    position: absolute;
    cursor: pointer;
    right: 0;
    top: 0;

  }

  .DropdownUlLvl1 span~.DropdownUlLvl2 {
    opacity: 0;
    display: none;
  }

  .DropdownUlLvl1 span.active {
    transform: rotate(180deg);
  }

  .DropdownUlLvl1 span.active~.DropdownUlLvl2 {
    opacity: 1;
    display: block;
  }

  label,
  input {
    cursor: pointer;
  }

  input[type="checkbox"] {
    position: relative;
  }

  input[type='checkbox']::after {
    width: 12px;
    content: "";
    height: 12px;
    border-radius: 3px;
    border: solid 1px #296e2f;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
  }

  input[type='checkbox']:checked:after {
    content: "";
    background-color: #296e2f;
  }


  .item {
    padding: 0px 20px 8px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .item .item-link {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.13;
    text-align: center;
    color: #573085;
    text-decoration: none;

  }

  .selectFilter {
    display: flex;
    align-items: center;
    margin-bottom: 35px;
  }

  .selectFilter span {
    display: flex;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 1.13;
    margin-left: 15px;
    margin-right: 24px;
    color: #ffffff;
  }

  .selectFilter select {
    display: flex;
    font-family: 'Open Sans', sans-serif;
    background: url('../static/arrow.png') center right 7px no-repeat white;
    min-width: 167px;
    font-size: 14px;
    line-height: 1.29;
    text-align: left;
    color: #2d2d2d;
    padding: 5px 22px 5px 14px;
  }

  .media-padding {
    padding-right: 35px;

  }

  @media screen and (max-width: 959) {
    .media-padding {
      padding-right: 0px;

    }
  }
</style>