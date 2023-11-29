 const checkbox = document.getElementById('myCheckbox');
    
    // เพิ่ม event listener สำหรับ checkbox
    checkbox.addEventListener('change', function() {
      // ถ้า checkbox ถูกเลือก
      if (this.checked) {
        document.body.style.backgroundColor = 'black';
      } else {
        // ถ้า checkbox ไม่ถูกเลือก
        document.body.style.backgroundColor = 'white';

      }
    });