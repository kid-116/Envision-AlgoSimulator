



const createHeapTree = (arr, n, i) => {

    let largest = i;
    let l = 2 * i + 1; 
    let r = 2 * i + 2; 
    
    
     if (l < n && arr[l] > arr[largest]) {
           largest = l; 
     }
    
     
     if (r < n && arr[r] > arr[largest]) {
          largest = r; 
     }
    
     
     if (largest != i) { 
          let temp = arr[i]; 
          arr[i] = arr[largest]; 
          arr[largest] = temp; 
    
        
        createHeapTree(arr, n, largest); 
      } 
  }
  
   
   const heapSort = (arr, n) => { 
       
       for (let i =(n / 2 - 1); i >= 0; i--) {
           createHeapTree(arr, n, i); 
       }
    
       
       for (let i = n - 1; i >= 0; i--) { 
          
          let temp = arr[0]; 
          arr[0] = arr[i]; 
          arr[i] = temp; 
    

          createHeapTree(arr, i, 0); 
       } 
   }
   function display  (arr,n){
       for(let i=0;i<n;i++){
           console.log(arr[i]);
       }
   }
   
 
   let arr1=[44,55,33,22,11,99,88,56];
   let arr_new = [44,55,33,22,11,99,88,56];
   console.log(arr1);
createHeapTree(arr1,8,0);
 heapSort(arr1,8);
 display(arr1,8);


 document.getElementById("heapSort").innerHTML = arr_new ;
 document.getElementById("heap_sort").innerHTML = arr1;