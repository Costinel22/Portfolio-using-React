import React from 'react';
import './style.css'; // Make sure to create a CSS file for styling
import { Container, Row, Col } from 'react-bootstrap';
import Hero from '../Hero/index.jsx';
import picture1 from "../../../public/picture11.png"
import picture2 from "../../../public/picture4.png"


const PresentationPage = () => {
    return (
        <div>
            <Hero >
                <div className="overlay"> </div>
                <img src={picture1} alt="My image" style={{ opacity: 0.3 }} />
                <div className="content">
                    <Container size="md-12 just ">
                        <Col size="md-4 just">
                            <h1 id="setName" >Andreea and Costinel Malaiasi</h1>
                        </Col>

                    </Container>
                </div>
            </Hero>
            <div>
                <Container>
                    <div className="presentation-container">
                        {/* Slide 1: Title and Introduction */}
                        <section className="slide">
                            <h1>Agritek Warehouse Presentation</h1>
                            <h2>Innovative Solutions for Agricultural Stock Management</h2>
                            <img src="path/to/your/background-image1.jpg" alt="Modern Agricultural Warehouse" className="background-image" />
                            <div className="presenter-info">
                                <p>Presenter: [Your Name]</p>
                                <p>Date: [Date of Presentation]</p>
                            </div>
                            <div className="call-to-actions">
                                <button>Sign Up</button>
                                <button>Contact Us</button>
                                <button>Learn More</button>
                            </div>
                        </section>

                        {/* Slide 2: About the Company */}
                        <section className="slide">
                            <h1>About Agritek</h1>
                            <p><strong>Mission:</strong> "At Agritek, we are dedicated to providing advanced solutions for inventory management and logistics in the agricultural sector to optimize processes and reduce costs."</p>
                            <p><strong>Vision:</strong> "To become global leaders in warehouse management solutions, promoting innovation and sustainability in the agricultural industry."</p>
                            <p><strong>History:</strong> "Founded in 2010, Agritek has steadily evolved from a small local supplier of warehouse software solutions to a major player in the global market with clients in over 20 countries."</p>
                            <img src={picture2} alt="Agritek Team" className="company-image" />
                            <div className="roadmap">
                                {/* Include a graphical representation of the company's evolution */}
                            </div>
                        </section>

                        {/* Slide 3: The Problem and the Solution */}
                        <section className="slide">
                            <h1>Challenges in Agricultural Stock Management</h1>
                            <h2>Challenges:</h2>
                            <ul>
                                <li>Inefficiency in inventory management: Use of traditional systems that are not integrated and lead to human error and lack of visibility.</li>
                                <li>Loss of products: Damage or expiration of products caused by improper management of storage conditions.</li>
                                <li>High warehousing costs: Excessive expenditure on equipment and human resources, as well as inefficient space management.</li>
                            </ul>
                            <h2>The Agritek Solution:</h2>
                            <ul>
                                <li>Advanced technology: Using our cloud-based Warehouse Management System (WMS) that integrates all storage processes, including real-time inventory monitoring.</li>
                                <li>Automation: Deploying automated equipment, such as warehouse and transport robots, to reduce errors and increase efficiency.</li>
                                <li>Predictive analytics: Using machine learning algorithms to predict demand and optimize inventory management.</li>
                            </ul>
                            <div className="solution-graphics">
                                {/* Include graphics showing the impact of challenges and solutions provided */}
                            </div>
                        </section>

                        {/* Slide 4: Benefits of the Solution */}
                        <section className="slide">
                            <h1>Benefits for Customers</h1>
                            <h2>Loss Reduction:</h2>
                            <p>Real-time monitoring: Our WMS system provides instant updates on inventory and storage conditions, preventing losses due to spoilage.</p>
                            <p>Example: Implementing the system at Farm XYZ reduced perishable product losses by 30% in the first year.</p>

                            <h2>Improved Efficiency:</h2>
                            <p>Process automation: Robots and automated inventory management systems reduce the time required for sorting and delivery.</p>
                            <p>Example: In the Agritek warehouse, automation increased operational efficiency by 50% and reduced costs by 20%.</p>

                            <h2>Cost Reduction:</h2>
                            <p>Space optimization: Using smart storage solutions and algorithms to optimize space utilization.</p>
                            <p>Example: Implementing our solutions enabled a 15% saving in storage costs for our main client.</p>
                            <div className="benefits-graphics">
                                {/* Include comparative graphs and testimonials */}
                            </div>
                        </section>

                        {/* Slide 5: Case Study */}
                        <section className="slide">
                            <h1>Case Study: Farm XYZ</h1>
                            <h2>Context:</h2>
                            <p>Client: Farm XYZ, one of the largest suppliers of fresh produce in the region.</p>
                            <p>Challenges: Inefficiency in inventory management, high losses due to product expiration, high storage costs.</p>

                            <h2>Implemented Solution:</h2>
                            <p>Agritek WMS System: Integration of an advanced management system, automated storage and delivery equipment.</p>
                            <p>Predictive Analysis: Implementation of a forecasting module to reduce surplus and shortages of stock.</p>

                            <h2>Results:</h2>
                            <p>Loss Reduction: Losses due to product expiration decreased by 40%.</p>
                            <p>Increased Efficiency: Order processing time reduced by 35%.</p>
                            <p>Savings: Storage costs decreased by 25% in the first 6 months of implementation.</p>
                            <div className="case-study-graphics">
                                {/* Include specific graphs and data */}
                            </div>
                        </section>

                        {/* Slide 6: Reducing Losses through Secure Management */}
                        <section className="slide">
                            <h1>Reducing Losses through Secure Management</h1>
                            <p><strong>Data Security:</strong> By using advanced encryption and blockchain technologies, product, shipment, and inventory data are protected against unauthorized changes and access.</p>
                            <p><strong>Theft Prevention:</strong> The system monitors all product movements in the warehouse in real time, with automatic updates for each entry and exit.</p>
                            <p><strong>Automatic Alerts:</strong> The platform sends alerts and notifications for anomalies, such as unjustified losses or damage during handling.</p>
                            <div className="security-graphics">
                                {/* Use a flow chart to show how the platform tracks stocks and identifies losses */}
                            </div>
                        </section>

                        {/* Slide 7: How a Smart Warehouse Can Help a Population */}
                        <section className="slide">
                            <h1>Food Security through Smart Stocks</h1>
                            <p>Economic Model: Agritek warehouse can store food and agricultural products when prices are low and production is high, then distribute them strategically during times of crisis.</p>
                            <p><strong>Social and Economic Impact:</strong> Helps communities affected by drought or poor yields by ensuring access to resources at reasonable prices.</p>
                            <p><strong>Price Stabilization:</strong> Through inventory control and intelligent distribution, sudden price increases during crises can be avoided.</p>
                            <div className="economic-graphics">
                                {/* Include an economic chart showing price fluctuations and how smart stocks stabilize the market */}
                            </div>
                        </section>

                        {/* Slide 8: Local Compliance Policies and Procedures */}
                        <section className="slide">
                            <h1>Compliance with Local Regulations and Procedures</h1>
                            <p>Agritek Solution Save Warehouse complies with local storage and handling regulations, ensuring product and employee safety:</p>
                            <p><strong>Storage Policies:</strong> Strict storage guidelines for different types of products, protecting them from deterioration caused by climatic factors.</p>
                            <p><strong>Employee Safety:</strong> Training staff in safe handling of products and use of protective equipment.</p>
                            <p><strong>Compliance with Local Regulations:</strong> Adhering to government requirements for storage and distribution.</p>
                            <div className="compliance-graphics">
                                {/* Include a chart detailing storage and handling procedures according to local regulations */}
                            </div>
                        </section>

                        {/* Slide 9: Impact on Sustainable Development */}
                        <section className="slide">
                            <h1>Agritek's Contribution to Sustainable Development</h1>
                            <p><strong>Reduction of Wastage:</strong> By monitoring stocks carefully, spoilage and losses are minimized.</p>
                            <p><strong>Resource Efficiency:</strong> Optimizing the use of logistics resources, such as transportation, to reduce carbon footprint.</p>
                            <p><strong>Supporting Farmers:</strong> Providing local farmers with access to modern storage facilities to maximize production and income, contributing to local economic development.</p>
                            <div className="sustainability-graphics">
                                {/* Include a chart showing the environmental impact and logistics efficiency of the warehouse */}
                            </div>
                        </section>

                        {/* Slide 10: Transport and Resource Planning */}
                        <section className="slide">
                            <h1>Efficient Transport and Logistics</h1>
                            <p><strong>Transportation Planning:</strong> Scheduling transportation based on delivery requirements and vehicle availability.</p>
                            <p><strong>Resource Monitoring:</strong> Real-time view of available resources and their allocation to avoid delays.</p>
                            <div className="transport-graphics">
                                {/* Include an interactive map illustrating transport distribution and resource monitoring */}
                            </div>
                        </section>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default PresentationPage;
