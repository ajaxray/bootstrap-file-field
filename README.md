Bootstrap File Field
============================

jQuery plugin to enhance file fields with modern features and design, **without ajax upload**. 
Use smart file upload features (e,g, restricting size and file type, showing selected file list etc.)
with generic form submit workflow.

How to use
------------------
Applying for all file fields with `smart-file` class.

```
$('.smart-file').smartFileField({  
    label: 'Select Profile Images',  
    fileTypes: 'image/jpeg,image/png,image/gif',  
    maxFileSize: 20000 // 20kb in bytes  
});
```

Adding Restrictions
-------------------------

You can add restrictions based on - 

* File Types (using mime types)
* Maximum File Size
* Minimum File Size
* Maximum Total Size (for multiple selection)
* Maximum number of files
* Minimum number of files

Customizing design
--------------------------


Inspired by: http://www.abeautifulsite.net/whipping-file-inputs-into-shape-with-bootstrap-3/
