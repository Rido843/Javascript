// manipulasi aray

//1. menambah isi array
// var arr=["a",1, true];
// console.log(arr[1]);

// method pada array
// var arr =['nama', 'rido','trimanto' ];
// console.log(arr.join('-'));


// 2. push and pop
// arr.push('aku');
// arr.pop();
// console.log(arr.join('-'));

//membuat objek angkot
function Angkot(sopir, trayek, penumpang, kas){
	this.sopir =sopir;
	this.trayek = trayek;
	this.penumpang = penumpang;
	this.kas =kas;

	this.penumpangNaik=function(namapenumpang) {
		this.penumpang.push(namapenumpang);
		return this.penumpang
	}
	this.penumpangTurun= function(namapenumpang,bayar){
		if(this.penumpang.length===0){
			alert('angkot masih kosong')
			return false;
		}
		for(var i=0; i<this.penumpang.length; i++)
		{
			if(this.penumpang[i]==namapenumpang){
				this.penumpang[i]=undifined;
				this.kas+=bayar;
				return this.penumpang;
			}
		}
	}

}
var angkot1 = new Angkot('Rido trimanto',['buluspesantren','kebumen'],[],0);
var angkot2 = new Angkot('Rido trimanto',['ambal','kebumen'],[],0);

