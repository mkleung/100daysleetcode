function reverse(str){

    if (str === "") {
          return "";
    }
    else {
        return reverse(str.substr(1)) + str.substr(0,1);
    }

}

reverse("abcde");

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'