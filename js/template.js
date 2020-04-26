// 通過檢查來測試瀏覽器是否支持HTML模板元素 
// 用於保存模板元素的內容屬性。
if ('content' in document.createElement('template')) {

  // 使用現有的HTML tbody實例化表和該行與模板
  let t = document.querySelector('#productrow'),
  td = t.content.querySelectorAll("td");
  td[0].textContent = "1235646565";
  td[1].textContent = "Stuff";

  // 克隆新行並將其插入表中
  let tb = document.getElementsByTagName("tbody");
  let clone = document.importNode(t.content, true);
  tb[0].appendChild(clone);
  
  // 創建一個新行
  td[0].textContent = "0384928528";
  td[1].textContent = "Acme Kidney Beans";

  // 克隆新行並將其插入表中
  let clone2 = document.importNode(t.content, true);
  tb[0].appendChild(clone2);

} else {
  // 找到另一種方法來添加行到表，因為不支持HTML模板元素。
}