function Sing(city,pic,paragraph){
this.city = city;
this.pic = pic;
this.paragraph=paragraph;
this.price =howManyWordsOnASin(this.paragraph)*100;

}

const singArray =[{sing:new Sing("miami",false,12)},
    {sing:new Sing("orlando",false,45)},
    {sing:new Sing("jerusalem",false,46)},
    {sing:new Sing("orlando",true,32)},
    {sing:new Sing("orlando",false,43)},
    {sing:new Sing("jerusalem",true,35)},
    {sing:new Sing("orlando",false,54)},
    {sing:new Sing("jerusalem",true,12)},
    {sing:new Sing("orlando",false,25)},
    {sing:new Sing("miami",true,12)},
    {sing:new Sing("miami",true,55)},
    {sing:new Sing("miami",false,15)}]



    function howManyWordsOnASin(paragraph) {
        counter=0;
        for (let i = 0; i < paragraph.length; i++) {
           if (paragraph[i]==" ") {
            counter++;
           }
            
        }

        return counter+1;
    }

   /* console.log(howManyWordsOnASin("odiaosd oidasodi wiiwiw asdj iasj awdaw awdwa d")); */
   
   let newSing= new Sing("bruh",false ,"odiaosd oidasodi wiiwiw asdj iasj awdaw awdwa d sdf cxv sdvxc vsdf adsvc dsf sdvsdfgsedvsd sdfsd vcsd");

   console.log(newSing);