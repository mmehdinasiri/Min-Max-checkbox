
        $(function(){ 
            //seclect all checked input and set preventDefault on each of them
            function disPREselected(){
                var preSelected =  $("input:checkbox:checked" );
                preSelected.each(function(el){
                    $(this).on("click" ,function(event){
                        event.preventDefault();
                    })
                })
            }
           
            //set min max and select container and btn for each group of chackbox
            function checkboxGRP(ContainerName){
                var Name = ContainerName;
                var container =('[data-chackbox-group=' + Name + " ]" );
                var min =  $(container).attr('data-chackbox-min');
                var max =  $(container).attr('data-chackbox-max');
                var btn =  $("[data-chackbox-btn=" + Name + " ]" );
                var len =  $("[data-chackbox-group=" + Name + "]  input:checkbox:checked" ).length;     
                btnHnd(min,max,len,btn);
            }

            //function to check submit form or not
            function btnHnd(min,max,len,btn){
                if(min == undefined && max == undefined){
                    min = 1 
                    max = 9999 
                    if( len >= min && len <= max){
                        btn.attr("disabled", false);
                    }else if (len > max ) {
                        btn.attr("disabled", true);
                    }else{
                        btn.attr("disabled", true);
                    }

                }else if(min == undefined){
                    min = 1 

                    if( len >= min && len <= max){
                        btn.attr("disabled", false);
                    }else if (len > max ) {
                        btn.attr("disabled", true);
                    }else{
                        btn.attr("disabled", true);
                    }
                }else if( max == undefined){
                    max = 9999 
                   
                    if( len >= min && len <= max){
                    btn.attr("disabled", false);
                    }else if (len > max ) {
                        btn.attr("disabled", true);
                    }else{
                        btn.attr("disabled", true);
                    }

                }else{
                   
                    if( len >= min && len <= max){
                        btn.attr("disabled", false);
                    }else if (len > max ) {
                        btn.attr("disabled", true);
                    }else{
                        btn.attr("disabled", true);
                    }
                }
            }
          

            //init
            disPREselected()
            var allGRP =  $('[data-chackbox-group]');
            allGRP.each(function(){
                var ContainerName =  $(this).attr('data-chackbox-group');
                checkboxGRP(ContainerName);
            })

            //check any change 
            $('[data-chackbox-group] input:checkbox').on('click' , function(){
                var ContainerName =  $(this).closest('[data-chackbox-group]').attr('data-chackbox-group');
                setTimeout(function () {
                   checkboxGRP(ContainerName);
                }, 0)
            })
        })


