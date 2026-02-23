const btn = document.getElementById('btn')

btn.addEventListener('mouseout', function(){
    console.log('Button Is Clicked!!!')
})

const type1 = document.getElementById('search1')
type1.addEventListener('keyup', function(e){
    console.log(e.target.value)
})

const type2 = document.getElementById('search2')
type2.addEventListener('keydown', function(e){
    console.log(e.target.value)
})

const type3 = document.getElementById('search3')
type3.addEventListener('keypress', function(e){
    console.log(e.target.value)
})