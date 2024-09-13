import React from 'react'

function GetMap() {
  return (
    <>
        <div className="map fix" style={{ background: "#f5f5f5" }}>
            <div className="container-flud">
                <div className="row">
                <div className="col-lg-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.987493338811!2d83.20343477540838!3d26.001227077202135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991bc4a96b8d75b%3A0x929f6f966091c56a!2sDental%20College%20Azamgarh!5e0!3m2!1sen!2sin!4v1726092896691!5m2!1sen!2sin" width={600} height={450} style={{ border: 0 }} allowFullScreen="" loading="lazy" />
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default GetMap;