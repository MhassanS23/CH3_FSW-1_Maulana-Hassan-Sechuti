class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init() {
    await this.load();

    // Register click listener
    //this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.filterDataMobil;
  }

  run = () => {
    // this.clear();
    // const data = this.filterDataMobil();

    // if(data.length == 0 || data == undefined){
    //   const node = document.createElement("div");
    //   const buttonEdit = document.getElementsByClassName('btn-search');
    //   node.innerHTML = `HASIL PENCARIAN TIDAK DITEMUKAN :)`
    //   node.style.gridColumn = 2;
    //   node.style.textAlign = "center";
    //   buttonEdit[0].innerHTML = "Edit"
    //   this.carContainerElement.appendChild(node);
    // }else{
    //   data.forEach((car) => {
    //     const node = document.createElement("div");
    //     const buttonEdit = document.getElementsByClassName('btn-search');
    //     node.innerHTML = car.render();
    //     buttonEdit[0].innerHTML = "Edit"
    //     this.carContainerElement.appendChild(node);
    //   });
    // }
  
  };


  
  filterDataMobil = async () => {
    this.clear();
    const opsiDriver = document.getElementById('opsi-driver').value;
    const tanggal = document.getElementById('tanggal').value;
    const waktu = document.getElementById('waktu').value;
    const penumpang = document.getElementById('penumpang').value;
    const datetime = new Date(`${tanggal} ${waktu}`)
    
    // console.log(opsiDriver)
    // console.log(Coba.init([roti,keju]));
    // console.log(typeof waktu)
    // console.log(typeof tanggal)

    // if(opsiDriver === "" || penumpang === "" || tanggal == ""){
    //   alert("Please Fill Filter Form");
    // }else if(opsiDriver == "true"  && penumpang !="" && tanggal != ""){
    //   return Car.list.filter((cars)=>
    //     cars.available == true && cars.capacity >= penumpang && cars.availableAt <= datetime
    //   );
    // }else if(opsiDriver == "false"  && penumpang !="" && tanggal != ""){
    //   return Car.list.filter((cars)=>
    //     cars.available == false && cars.capacity >= penumpang && cars.availableAt <= datetime
    //   );
    // }
    if(opsiDriver === "" || penumpang === "" || tanggal == ""){
        alert("Please Fill Filter Form")
        return;
      }

    const filter = (car) => {
    const sopirFiltertrue = car.available == true && car.capacity >= penumpang && car.availableAt <= datetime;
    const sopirFilterfalse = car.available == false && car.capacity >= penumpang && car.availableAt <= datetime;

      if(opsiDriver === "true"){
        return sopirFiltertrue;
      }else{
        return sopirFilterfalse;
      }
    }

    const cars = await Binar.listCars(filter);
    console.log(cars)
    Car.init(cars);

    if(cars.length == 0 || cars == undefined){
      const node = document.createElement("div");
      const buttonEdit = document.getElementsByClassName('btn-search');
      node.innerHTML = `HASIL PENCARIAN TIDAK DITEMUKAN :)`
      node.style.gridColumn = 2;
      node.style.textAlign = "center";
      buttonEdit[0].innerHTML = "Edit"
      this.carContainerElement.appendChild(node);
    }else{
      Car.list.forEach((car) => {
        const node = document.createElement("div");
        const buttonEdit = document.getElementsByClassName('btn-search');
        node.innerHTML = car.render();
        buttonEdit[0].innerHTML = "Edit"
        this.carContainerElement.appendChild(node);
      });
    }
}


  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
    console.log(cars)
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}