using Sauron.Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sauron.Services.Repositories
{
    public class WarehouseRepository
    {        
        private IList<WarehouseModel> Warehouses;

        public WarehouseRepository(int count) {
            Warehouses = new List<WarehouseModel>();
            GenerateWarehouses(count);
        }
        public void Add(WarehouseModel warehouse) {            
            Warehouses.Add(warehouse);
        }

        public bool Remove(WarehouseModel warehouse)
        {
            return Warehouses.Remove(warehouse);
        }

        public WarehouseModel GetByName(string name)
        {
           return  Warehouses.First(x=> x.Name.ToLower() == name.ToLower())??null;
        }

        public WarehouseModel GetById(int id)
        {
            return Warehouses.First(x => x.Id == id) ?? null;
        }

        public IList<WarehouseModel> All() { return Warehouses; }

        private void GenerateWarehouses(int count)
        {
            for (int i = 0; i < count; i++)
            {
                Warehouses.Add((new WarehouseModel() { Name = "Depot-"+ i,Id= i+100}));
            }
        }
    }
}