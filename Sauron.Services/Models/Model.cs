using Sauron.Services.App_Start;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace Sauron.Services.Models {

    public abstract class Model {

        public abstract Model Map(DataRow row);
        public abstract SQLQuery Insert();
        public abstract SQLQuery Update();

    }
}