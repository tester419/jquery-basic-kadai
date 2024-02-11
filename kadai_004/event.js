$(window).on('load scroll', (e) => {
  // load
  if(e.type === 'load'){
    console.log('loadイベントが発生しました');
  }
  // scroll
  if(e.type === 'scroll'){
    console.log('scrollイベントが発生しました');
  }
});