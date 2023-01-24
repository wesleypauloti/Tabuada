function tabuada() {
  let num = document.getElementById('txtn')
  let tab = document.getElementById('seltab')
  let res = document.getElementById('res')
  
 
  if (num.value.length != 0) {
    tab.innerHTML = ''
    let n = Number(num.value)
    for (c = 1; c <= 10; c++) {
      let item = document.createElement('option')
      item.text = `${n} X ${c} = ${n * c}`
      tab.appendChild(item)
    }
  } else {
    tab.innerHTML = ''
    let item = document.createElement('option')
    item.text = 'Por Favor digite um número' 
    tab.appendChild(item)
  }  
}
