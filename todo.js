// var h  = document.createElement('h1')
// var myValue = document.createTextNode('Hello  World!')

// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h);

// var val = 5;

// while (val > 0) {
//     console.log(val);
//     val--
// }

var ul = document.getElementById('list');
var li;

refresh();



var addButton = document.getElementById('add')
addButton.addEventListener('click',addItem);

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click',removeItem)





function addItem() {
    // console.log('Add button is clicked');


    var input = document.getElementById('input');
    var item = input.value;
    // var ul = document.getElementById('list');

    var textnode = document.createTextNode(item)

    if (item === '') {
        return false;
        //Add a p tag and assign a value of "Enter your todo"
    } else {
        var i = 0 
        for( i = 0; ; i++){
//            console.log("inside loop")
            if(localStorage.getItem(i) == null ){
//                console.log("Inside if condition")
                localStorage.setItem(i, item);
                break;
            }
                
        }
        
//        localStorage.setItem(item.length , item);
//        localStorage.getItem(4);
        
        
        //create li
        li = document.createElement('li');
        
        //create checkbox
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check')


        //create label
        var label = document.createElement('label');
        label.setAttribute('for','item') // optional

        //add these elements on web page

        ul.appendChild(li);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        // li.className = 'visual';

         input.value = ''

    
    }
}

function removeItem() {
    // console.log('Remove button is clicked');
//    labe
    li = ul.children
//    console.log(li);
    
    
    // console.log(li);
    for (let index = 0; index < li.length; index++) {
//        remo
    //     const element = li[index];
        console.log("Inside for loop")
    //    console.log(element); 
        while (li[index] && li[index].children[0].checked) {
            var zeel = li[index].children[1]
            for(let j = 0; ; j++){
                console.log("Inside remove loop")
                if(localStorage.getItem(j) == zeel.textContent){
                    localStorage.removeItem(j);
                    ul.removeChild(li[index])
                    break;
                }
            }
//            localStorage.removeItem(zeel.textContent.length)
            
//            ul.removeChild(li[index])
            
            
        }

    }

}





function refresh(){
    for(var i = 0; i<=100; i++){
    var refreshItem = localStorage.getItem(i);
    if(refreshItem === null){
        continue;
    }
    else {
    var textnode = document.createTextNode(refreshItem)
    
    //create li
        li = document.createElement('li');
        
        //create checkbox
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check')


        //create label
        var label = document.createElement('label');
        label.setAttribute('for','item') // optional
    
    
        ul.appendChild(li);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
    }
    }
}