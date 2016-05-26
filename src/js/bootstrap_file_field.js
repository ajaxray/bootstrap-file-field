/*! BootstrapFileField v0.1 | (c) ajaxray.com | MIT License
 * https://github.com/ajaxray/bootstrap-file-field
 **/
(function( $ ) {

    $.fn.smartFileField = function(options) {

        var settings = $.extend({
            // Presentation
            label: "Select File",
            btnClass: 'btn-default',

            // Restrictions
            fileTypes: false,
            maxFileSize: false,
            minFileSize: false,
            maxTotalSize: false,
            maxNumFiles: false,
            minNumFiles: false
        }, options );

        var abort = function(input) {
            input.files.value = "";
            return false;
        };

        var fileSelectHandler = function(event, files, fileNameList) {
            fileNameList.empty();

            for (var i in files) {
                if (files.hasOwnProperty(i)) {
                    fileNameList.append('<li class="text-success">&check; ' + files[i].name + '</li>');
                }
            }
        };

        var fileSelectionErrorHandler = function(event, message, fileNameList) {
            fileNameList.empty()
                .append('<li class="text-danger"><b>Error!</b> '+ message +'</li>');
        };

        this.filter( ":file" ).each(function() {
            var btnClass     = $(this).data('btn-class') ||settings.btnClass;
            var label        = $(this).data('label') || settings.label;

            // Restrictions
            var fileTypes    = $(this).data('file-types') || settings.fileTypes;
            var maxFileSize  = $(this).data('max-file-size') || settings.maxFileSize;
            var minFileSize  = $(this).data('min-file-size') || settings.minFileSize;
            var maxTotalSize = $(this).data('max-total-size') || settings.maxTotalSize;
            var maxNumFiles  = $(this).data('max-num-files') || settings.maxNumFiles;
            var minNumFiles  = $(this).data('min-num-files') || settings.minNumFiles;

            var button = $('<span class="btn btn-file"></span>')
                .addClass(btnClass)
                .insertBefore(this);
            var fileList = $('<ul class="list-unstyled small fileList"></ul>')
                .insertAfter(button);

            $(button).append(label);
            $(button).append(this);

            $(this).on('fileSelect', fileSelectHandler);
            $(this).on('fileSelectionError', fileSelectionErrorHandler);

            $(this).on('change', function(e) {
                console.log(this.files);

                // Check max file number
                if(maxNumFiles && this.files.length > maxNumFiles) {
                    $(this).trigger('fileSelectionError', [maxNumFiles +' files are allowed at most!', fileList]);
                    return abort(this);
                }

                // Check min file number
                if(minNumFiles && this.files.length < minNumFiles) {
                    $(this).trigger('fileSelectionError', ['Have to select at least '+ minNumFiles +' files!', fileList]);
                    return abort(this);
                }

                // Check max total size
                if(maxTotalSize) {
                    var totalSize = 0;
                    for (var x = 0; x < this.files.length; x++) {
                        totalSize += this.files[x].size;
                    }
                    if(totalSize > maxTotalSize) {
                        $(this).trigger('fileSelectionError', ['Total size of selected files should not exceed '+ maxTotalSize +' byte!', fileList]);
                        return abort(this);
                    }
                }

                // Check file-wise restrictions
                for (var x = 0; x < this.files.length; x++) {

                    var file = this.files[x];

                    // Check file type
                    if(fileTypes && fileTypes.indexOf(file.type) < 0) {
                        $(this).trigger('fileSelectionError', [file.name +' : File type is not allowed!', fileList]);
                        return abort(this);
                    }

                    // Check max size
                    if(maxFileSize && file.size > maxFileSize) {
                        $(this).trigger('fileSelectionError', [file.name +' : Exceeding maximum allowed file size!', fileList]);
                        return abort(this);
                    }

                    // Check min size
                    if(minFileSize && file.size < minFileSize) {
                        $(this).trigger('fileSelectionError', [file.name +' : Smaller than minimum allowed file size!', fileList]);
                        return abort(this);
                    }

                }

                $(this).trigger('fileSelect', [this.files, fileList]);
            });

        });

        return this;

    };

    $(':file[data-field-type="bootstrap-file-filed"]').smartFileField({});

}( jQuery ));