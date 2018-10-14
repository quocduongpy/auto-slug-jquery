$('input[name="title"]').on('input', function() {
    var slug = function(str) {
        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();
        // remove accents, swap ñ for n, etc
        var from = "ãàáảạäâấầẫẩậăặắẳẵằđẻẹẽèéëêếềểễệìíỉĩịïîọõỏõòóöôốồổỗộơớờởỡợụũủùúüûưứừửữựñç·/_,:;";
        var to   = "aaaaaaaaaaaaaaaaaadeeeeeeeeeeeeiiiiiiiooooooooooooooooooouuuuuuuuuuuuunc------";
        for (var i=0, l=from.length ; i<l ; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }
        str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes
        return str;
    };

    var slug = slug( $(this).val() );
    $('input[name="slug"]').val(slug);

});
