                var date1 = "112/12/15"
                var year = date1.substr(0, 3);
                StringtoInt = parseInt(year);
                var adyear = StringtoInt + 1911;
                var month = date1.substr(4, 2);
                var day = date1.substr(7, 2);

                var newdate = adyear.toString() + "/" + month + "/" + day;
                console.log(newdate);


                var date1Obj = new Date(newdate);
                var nowdate = new Date()
                console.log("date1Obj: " + date1Obj);

                if (date1Obj > nowdate) {
                    console.log("true: " + date1Obj + " > " + nowdate)

                } else {
                    console.log("false: " + date1Obj + " < " + nowdate)
                }
