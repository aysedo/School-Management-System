export const layout=`
<div class="container">
<div id="content">Content</div>
</div>
`
export const render=(pSelector,pData)=>{
    document.querySelector(pSelector).innerHTML=pData
}
