using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Sauron.Services.Models;
using Sauron.Services.App_Start;

namespace Sauron.Services.Controllers
{
    public class CamionModelsController : ApiController
    {


        // GET: api/CamionModels/All
        [HttpGet]
        public List<CamionModel> All()
        {
            DataSet data = SQLConnector.CreateQuery("SELECT * FROM camion");
            List<CamionModel> camiones = new List<CamionModel>();

            for (int i = 0; i < data.Tables[0].Rows.Count; i++)
            {
                CamionModel camion = CamionModel.Map(data.Tables[0].Rows[i]);
                camiones.Add(camion);
            }

            return camiones;

        }

    }

    //    // GET: api/CamionModels/5
    //    [ResponseType(typeof(CamionModel))]
    //    public IHttpActionResult GetCamionModel(int id)
    //    {
    //        CamionModel camionModel = db.CamionModels.Find(id);
    //        if (camionModel == null)
    //        {
    //            return NotFound();
    //        }

    //        return Ok(camionModel);
    //    }

    //    // PUT: api/CamionModels/5
    //    [ResponseType(typeof(void))]
    //    public IHttpActionResult PutCamionModel(int id, CamionModel camionModel)
    //    {
    //        if (!ModelState.IsValid)
    //        {
    //            return BadRequest(ModelState);
    //        }

    //        if (id != camionModel.ID)
    //        {
    //            return BadRequest();
    //        }

    //        db.Entry(camionModel).State = EntityState.Modified;

    //        try
    //        {
    //            db.SaveChanges();
    //        }
    //        catch (DbUpdateConcurrencyException)
    //        {
    //            if (!CamionModelExists(id))
    //            {
    //                return NotFound();
    //            }
    //            else
    //            {
    //                throw;
    //            }
    //        }

    //        return StatusCode(HttpStatusCode.NoContent);
    //    }

    //    // POST: api/CamionModels
    //    [ResponseType(typeof(CamionModel))]
    //    public IHttpActionResult PostCamionModel(CamionModel camionModel)
    //    {
    //        if (!ModelState.IsValid)
    //        {
    //            return BadRequest(ModelState);
    //        }

    //        db.CamionModels.Add(camionModel);
    //        db.SaveChanges();

    //        return CreatedAtRoute("DefaultApi", new { id = camionModel.ID }, camionModel);
    //    }

    //    // DELETE: api/CamionModels/5
    //    [ResponseType(typeof(CamionModel))]
    //    public IHttpActionResult DeleteCamionModel(int id)
    //    {
    //        CamionModel camionModel = db.CamionModels.Find(id);
    //        if (camionModel == null)
    //        {
    //            return NotFound();
    //        }

    //        db.CamionModels.Remove(camionModel);
    //        db.SaveChanges();

    //        return Ok(camionModel);
    //    }

    //    protected override void Dispose(bool disposing)
    //    {
    //        if (disposing)
    //        {
    //            db.Dispose();
    //        }
    //        base.Dispose(disposing);
    //    }

    //    private bool CamionModelExists(int id)
    //    {
    //        return db.CamionModels.Count(e => e.ID == id) > 0;
    //    }
    //}
}