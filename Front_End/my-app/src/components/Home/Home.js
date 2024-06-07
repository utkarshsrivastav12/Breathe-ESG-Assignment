import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="contain">
      <aside className="sidebar">
        <div className="logo">BREATHE ESG</div>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Entity Manager</li>
            <li className="active">Data Manager</li>
            <li>Reporting</li>
            <li>Materiality</li>
            <li>Suppliers</li>
            <li>Analytics</li>
            <li>Targets</li>
            <li className="logout">Logout</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header>
          <div className="view-name">
            <label htmlFor="view-select">View Name</label>
            <select id="view-select">
              <option>North India Region</option>
            </select>
          </div>
          <div className="fiscal-year">
            <label htmlFor="fiscal-year-select">For:</label>
            <select id="fiscal-year-select">
              <option>FY 2023-24</option>
            </select>
          </div>
          <button className="submit-button">Submit for Approval</button>
        </header>
        <div className="content">
          <div className="tabs">
            <button className="tab active">Data Entry</button>
            <button className="tab">Tracker</button>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>Assessment Title</th>
                <th>Type</th>
                <th>No. of Suppliers</th>
                <th>Score</th>
                <th>Risk Classification</th>
                <th>Status</th>
                <th>Result</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="checkbox" /></td>
                <td>Assessment 1</td>
                <td>BRSR</td>
                <td>20</td>
                <td>-</td>
                <td><span className="risk medium">Medium</span></td>
                <td><span className="status pending">PENDING</span></td>
                <td>-</td>
                <td>
                  <button className="action share"></button>
                  <button className="action delete"></button>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>Assessment 2</td>
                <td>BRSR</td>
                <td>25</td>
                <td>98</td>
                <td><span className="risk low">Low</span></td>
                <td><span className="status complete">COMPLETE</span></td>
                <td><a href="#">View</a></td>
                <td>
                  <button className="action share"></button>
                  <button className="action delete"></button>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>Assessment 3</td>
                <td>BRSR</td>
                <td>35</td>
                <td>22</td>
                <td><span className="risk high">High</span></td>
                <td><span className="status complete">COMPLETE</span></td>
                <td><a href="#">View</a></td>
                <td>
                  <button className="action share"></button>
                  <button className="action delete"></button>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>Assessment 4</td>
                <td>Custom</td>
                <td>49</td>
                <td>23</td>
                <td><span className="risk medium">Medium</span></td>
                <td><span className="status complete">COMPLETE</span></td>
                <td><a href="#">View</a></td>
                <td>
                  <button className="action share"></button>
                  <button className="action delete"></button>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>Assessment 5</td>
                <td>Custom</td>
                <td>100</td>
                <td>42</td>
                <td><span className="risk medium">Medium</span></td>
                <td><span className="status complete">COMPLETE</span></td>
                <td><a href="#">View</a></td>
                <td>
                  <button className="action share"></button>
                  <button className="action delete"></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Home;
