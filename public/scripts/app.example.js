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
    this.loadButton.onclick = this.run;
  }

  run = () => {
  this.clear();
  const data = this.filterDataMobil();
  console.log(data);
  if(data.length == 0 || data == undefined){
    const node = document.createElement("div");
    const buttonEdit = document.getElementsByClassName('btn-search');
    node.innerHTML = `HASIL PENCARIAN TIDAK DITEMUKAN :)`
    node.style.gridColumn = 2;
    node.style.textAlign = "center";
    buttonEdit[0].innerHTML = "Edit"
    this.carContainerElement.appendChild(node);
  }else{
    data.forEach((car) => {
      const node = document.createElement("div");
      const buttonEdit = document.getElementsByClassName('btn-search');
      node.innerHTML = car.render();
      buttonEdit[0].innerHTML = "Edit"
      this.carContainerElement.appendChild(node);
    });
  }
  
  };


  
  filterDataMobil = () => {
    const opsiDriver = document.getElementById('opsi-driver').value;
    const tanggal = document.getElementById('tanggal').value;
    const waktu = document.getElementById('waktu').value;
    const penumpang = document.getElementById('penumpang').value;
    const datetime = new Date(`${tanggal} ${waktu}`)
    
    // console.log(opsiDriver)
    console.log(datetime)
    // console.log(typeof waktu)
    // console.log(typeof tanggal)

    if(opsiDriver === "" || penumpang === "" || tanggal == ""){
      alert("Please Fill Filter Form");
    }else if(opsiDriver == "true"  && penumpang !="" && tanggal != ""){
      return Car.list.filter((cars)=>
        cars.available == true && cars.capacity >= penumpang && cars.availableAt <= datetime
      );
    }else if(opsiDriver == "false"  && penumpang !="" && tanggal != ""){
      return Car.list.filter((cars)=>
        cars.available == false && cars.capacity >= penumpang && cars.availableAt <= datetime
      );
    }

    // if(opsiDriver == "true" && penumpang ==""){
    //   return Car.list.filter((cars)=>
    //     cars.available === true && cars.availableAt <= datetime
    //   );
    // }else if(opsiDriver == "true" && penumpang != "" ){
    //   return Car.list.filter((cars)=>
    //     cars.available == true && cars.capacity >= penumpang && cars.availableAt <= datetime
    // );
    // }else if(opsiDriver == "false" && penumpang ==""){
    //   return Car.list.filter((cars)=>
    //     cars.available === false && cars.availableAt <= datetime
    //   );
    // }else if(opsiDriver == "false" && penumpang != "" ){
    //   return Car.list.filter((cars)=>
    //     cars.available == false && cars.capacity >= penumpang && cars.availableAt <= datetime
    // );
    // }
}

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
