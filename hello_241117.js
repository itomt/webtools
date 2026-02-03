//hello.js

/*
jlist1:項目のリスト
j1:項目の数
jlist2:カテゴリのリスト
j2:カテゴリの数
*/

function func2(){
    
    //リスト1(項目)を配列に格納
    var text1 = document.getElementById("list1").value;
    var ilist1 = text1.split("\n");
    if(ilist1.length>=3){
        //タイトル削除処理
        if(ilist1[0]!="" && ilist1[1]==""){
            ilist1[0]="";
        }
    }
    var jlist1 = [];
    for(i=0;i<ilist1.length;i++){
        if(ilist1[i] != ""){
            jlist1.push(ilist1[i]);
        }
    }
    var j1 = jlist1.length;
    
    //リスト2(カテゴリ)を配列に格納
    var text2 = document.getElementById("list2").value;
    var ilist2 = text2.split("\n");
  	if(ilist2.length>=3){
        //タイトル削除処理
        if(ilist2[0]!="" && ilist2[1]==""){
            ilist2[0]="";
        }
    }

    var jlist2 = [];
	var kakomiflag = document.getElementById("cb3").checked;
  	var gyotoflag = document.getElementById("cb4").checked;
    for(i=0;i<ilist2.length;i++){
        if(ilist2[i] != ""){
          	if(gyotoflag){
              	ilist2[i]=ilist2[i].slice(1);
            }
          	if(kakomiflag){
            	jlist2.push("<"+ilist2[i]+">");
            }else{
            	jlist2.push(ilist2[i]);
            }
        }
    }
    var j2 = jlist2.length;
	
	//項目の要素数がカテゴリの要素数より少なかった場合空白を追加
	//fulfillチェックが入っていた場合、項目を繰り返して埋める
	var fulfillflag = document.getElementById("cb6").checked;
	if(j2>j1){
		for(i=0;i<(j2-j1);i++){
			if(fulfillflag == true){
				jlist1.push(jlist1[i%j1]);
			}
			else{
				jlist1.push("");
			}
		}
		j1=jlist1.length;
	}

    //リスト1をシャッフル
    for(i=0;i<j1;i++){
        var random1 = Math.floor( Math.random() * j1 );
        var temp = jlist1[random1];
        jlist1[random1] = jlist1[i];
        jlist1[i] = temp;
    }

    //カテゴリ満足フラグ定義
    var inflag = Array(j2); //カテゴリ(jlist2[k])に項目が1つ以上入っていればtrue
    inflag.fill(false);

    //項目をカテゴリに入れていく
    var k=0;
    for(i=0;i<j1;i++){
        if(k>=j2){
            k=0;
            if(document.getElementById("cb1").checked){
                break;
            }
        }
        jlist2[k]+="\n"+jlist1[i];
        if(jlist1[i] != ""){
            inflag[k] = true;
        }
        k++;
    }

    //出力
    var out1 = "";
	var gyokanflag = document.getElementById("cb2").checked;
    var emptyskipflag = document.getElementById("cb5").checked;
    for(i=0;i<j2;i++){
        if(emptyskipflag == false || inflag[i] == true){
            out1+=jlist2[i]+"\n";
            if(gyokanflag){
                out1+="\n";
            }
        }
    }

    document.getElementById("list3").value = out1;
}

function func3(){
    
    //リスト1(項目)を配列に格納
    var text1 = document.getElementById("list1").value;
    var ilist1 = text1.split("\n");
    if(ilist1.length>=3){
        //タイトル削除処理
        if(ilist1[0]!="" && ilist1[1]==""){
            ilist1[0]="";
        }
    }
    var jlist1 = [];
    for(i=0;i<ilist1.length;i++){
        if(ilist1[i] != ""){
            jlist1.push(ilist1[i]);
        }
    }
    var j1 = jlist1.length;
    
    //リスト2(カテゴリ)を配列に格納
    var text2 = document.getElementById("list2").value;
    var ilist2 = text2.split("\n");
  	if(ilist2.length>=3){
        //タイトル削除処理
        if(ilist2[0]!="" && ilist2[1]==""){
            ilist2[0]="";
        }
    }

    var jlist2 = [];
	var kakomiflag = document.getElementById("cb3").checked;
  	var gyotoflag = document.getElementById("cb4").checked;
    for(i=0;i<ilist2.length;i++){
        if(ilist2[i] != ""){
          	if(gyotoflag){
              	ilist2[i]=ilist2[i].slice(1);
            }
          	if(kakomiflag){
            	jlist2.push("<"+ilist2[i]+">");
            }else{
            	jlist2.push(ilist2[i]);
            }
        }
    }
    var j2 = jlist2.length;
	
	//項目の要素数がカテゴリの要素数より少なかった場合空白を追加
	//fulfillチェックが入っていた場合、項目を繰り返して埋める
	var fulfillflag = document.getElementById("cb6").checked;
	if(j2>j1){
		for(i=0;i<(j2-j1);i++){
			if(fulfillflag == true){
				jlist1.push(jlist1[i%j1]);
			}
			else{
				jlist1.push("");
			}
		}
		j1=jlist1.length;
	}

    //リスト1をシャッフル
    for(i=0;i<j1;i++){
        var random1 = Math.floor( Math.random() * j1 );
        var temp = jlist1[random1];
        jlist1[random1] = jlist1[i];
        jlist1[i] = temp;
    }

    //カテゴリ満足フラグ定義
    var inflag = Array(j2); //カテゴリ(jlist2[k])に項目が1つ以上入っていればtrue
    inflag.fill(false);

    //項目をカテゴリに入れていく
    var k=0;
    for(i=0;i<j1;i++){
        if(k>=j2){
            k=0;
            if(document.getElementById("cb1").checked){
                break;
            }
        }
        jlist2[k]+="\n"+jlist1[i];
        if(jlist1[i] != ""){
            inflag[k] = true;
        }
        k++;
    }

    //出力
    var out1 = "";
	var gyokanflag = document.getElementById("cb2").checked;
    var emptyskipflag = document.getElementById("cb5").checked;
	
	
	//func3の変更点ここから下だけ
	
	/*
    for(i=0;i<j2;i++){
        if(emptyskipflag == false || inflag[i] == true){
            out1+=jlist2[i]+"\n";
            if(gyokanflag){
                out1+="\n";
            }
        }
    }
	*/
	
	var random_only_one = Math.floor( Math.random() * j2 );
	out1 += jlist2[random_only_one] + "\n";

    document.getElementById("list3").value = out1;
}
