function formatRupiah(params) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(params);
}

class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }


  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    const rent = formatRupiah(this.rentPerDay);
    return `
    <div class="card shadow">
      <img src="${this.image}" class="card-img-top" alt="${this.manufacture}">
      <div class="card-body">
      <h6 class="card-title">${this.manufacture}/${this.model}</h6>
      <p class="cost">${rent} / hari</p>
      <p class="card-text">${this.description} ${this.availableAt}</p>

      <div class="card-fill">
        <div><i class="fa-solid fa-user-group"></i>${this.capacity} Orang</div>
        <div><i class="fa-solid fa-gear"></i>${this.transmission}</div>
        <div><i class="fa-solid fa-calendar "></i>Tahun ${this.year}</div>
        <a class="btn-choose">Pilih Mobil</a>
      </div>
      </div>
    </div>
    `;
  }
}

