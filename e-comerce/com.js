function buy(image, product_name, price) {

    let all=document.getElementsByClassName('center-div')[0]
    if(all){
        all.remove()
    }

    var main = document.createElement('div');
    main.setAttribute('class', 'center-div');
    document.getElementsByTagName('body')[0].appendChild(main)

    var popup = document.createElement('div');
    popup.setAttribute('class', 'center-div-parent');
    main.appendChild(popup)

    var close = document.createElement('a');
    close.setAttribute('class', 'close-pop-up');
    var closetext = document.createTextNode('X');
    close.appendChild(closetext);
    close.onclick = function () {
        main.remove();
    };
    popup.appendChild(close);

    var thirdparent = document.createElement('div');
    thirdparent.setAttribute('class', 'thirdparent');
    popup.appendChild(thirdparent)

    // left

    var left = document.createElement('div');
    left.setAttribute('class', 'left');
    thirdparent.appendChild(left)

    var img = document.createElement('img');
    img.setAttribute('src', image);
    img.setAttribute('class', 'popup-img');
    left.appendChild(img);

    var product = document.createElement('p');
    var prd = document.createTextNode(product_name);
    product.appendChild(prd);
    left.appendChild(product)

    var money = document.createElement('p');
    money.setAttribute('class', 'rate');
    var mn = document.createTextNode('$' + price);
    money.appendChild(mn);
    left.appendChild(money)

    var left_blw = document.createElement('div');
    left_blw.setAttribute('class', 'left_blw');
    left.appendChild(left_blw)



    var purchase_number = 1

    // minus

    var minus = document.createElement('button');
    minus.setAttribute('class', 'minus');
    var sign_minus = document.createTextNode('-');
    minus.appendChild(sign_minus)
    left_blw.appendChild(minus)
   
    minus.onclick = function () {
        if (purchase_number >1) {
            purchase_number--;
        }
    update()
       

    };

    // count
    var count = document.createElement('div');
    count.setAttribute('class', 'count');
    var cn = document.createElement('input');
    cn.setAttribute('class','quantity');
    cn.setAttribute('value','1')
    count.appendChild(cn);
    left_blw.appendChild(count)
    
     function update(){
        cn.setAttribute('value',purchase_number)
        money.innerHTML=''
        money.appendChild(document.createTextNode('$'+price*purchase_number));
    }

    // plus

    var plus = document.createElement('button');
    plus.setAttribute('class', 'plus');
    var sign_plus = document.createTextNode('+');
    plus.appendChild(sign_plus)
    left_blw.appendChild(plus)


    plus.onclick = function () {
        purchase_number++;   
        update()   
    };
      
    // right

    var right = document.createElement('div');
    right.setAttribute('class', 'right');
    thirdparent.appendChild(right)

    var right_abv_text = document.createElement('div');
    right_abv_text.setAttribute('class', 'right_abv_text');
    var r_a_text = document.createTextNode('Enter Your Details');
    right_abv_text.appendChild(r_a_text)
    right.appendChild(right_abv_text)

    var input_name = document.createElement('input');
    input_name.setAttribute('class', 'input_name');
    input_name.setAttribute('placeholder', 'Your Name');
    right.appendChild(input_name)

    var input_address = document.createElement('textarea');
    input_address.setAttribute('class', 'input_address');
    input_address.setAttribute('placeholder', 'Your Address')
    right.appendChild(input_address)

    var buy_button = document.createElement('button');
    buy_button.setAttribute('class', 'buy_button');
    var buy_text = document.createTextNode('BUY');
    buy_button.appendChild(buy_text)
    right.appendChild(buy_button)

    buy_button.onclick=function(){
        main.remove()
    }

}