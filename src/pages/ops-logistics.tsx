import { useState, useRef, useEffect } from 'react';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  ScatterChart, Scatter, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';

// Custom hook for scroll reveal
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible] as const;
}

// Sample data for demonstrations
const inventoryData = [
  { month: 'Jan', current: 2400, optimal: 2000, excess: 400 },
  { month: 'Feb', current: 1398, optimal: 1800, excess: 0 },
  { month: 'Mar', current: 9800, optimal: 2200, excess: 7600 },
  { month: 'Apr', current: 3908, optimal: 2500, excess: 1408 },
  { month: 'May', current: 4800, optimal: 2800, excess: 2000 },
  { month: 'Jun', current: 3490, optimal: 3000, excess: 490 },
  { month: 'Jul', current: 4300, optimal: 3200, excess: 1100 },
  { month: 'Aug', current: 2100, optimal: 2900, excess: 0 },
];

const fulfillmentData = [
  { day: 'Mon', onTime: 85, late: 15, orders: 342 },
  { day: 'Tue', onTime: 92, late: 8, orders: 289 },
  { day: 'Wed', onTime: 78, late: 22, orders: 401 },
  { day: 'Thu', onTime: 89, late: 11, orders: 356 },
  { day: 'Fri', onTime: 95, late: 5, orders: 298 },
  { day: 'Sat', onTime: 88, late: 12, orders: 187 },
  { day: 'Sun', onTime: 91, late: 9, orders: 142 },
];

const supplierData = [
  { name: 'Supplier A', quality: 95, delivery: 89, cost: 12 },
  { name: 'Supplier B', quality: 87, delivery: 94, cost: 15 },
  { name: 'Supplier C', quality: 92, delivery: 78, cost: 18 },
  { name: 'Supplier D', quality: 89, delivery: 92, cost: 10 },
  { name: 'Supplier E', quality: 94, delivery: 85, cost: 14 },
];

const costBreakdown = [
  { name: 'Transportation', value: 35, color: '#8884d8' },
  { name: 'Warehousing', value: 25, color: '#82ca9d' },
  { name: 'Labor', value: 20, color: '#ffc658' },
  { name: 'Inventory Holding', value: 15, color: '#ff7300' },
  { name: 'Technology', value: 5, color: '#00ff00' },
];

const demandForecast = [
  { week: 'W1', actual: 1200, predicted: 1150, accuracy: 96 },
  { week: 'W2', actual: 1350, predicted: 1400, accuracy: 96 },
  { week: 'W3', actual: 1100, predicted: 1050, accuracy: 95 },
  { week: 'W4', actual: 1450, predicted: 1380, accuracy: 95 },
  { week: 'W5', actual: 1300, predicted: 1250, accuracy: 96 },
  { week: 'W6', actual: 1500, predicted: 1520, accuracy: 99 },
];

const routeEfficiency = [
  { route: 'Route A', distance: 245, time: 4.2, stops: 12, efficiency: 92 },
  { route: 'Route B', distance: 189, time: 3.1, stops: 8, efficiency: 89 },
  { route: 'Route C', distance: 312, time: 5.8, stops: 15, efficiency: 85 },
  { route: 'Route D', distance: 156, time: 2.9, stops: 6, efficiency: 94 },
  { route: 'Route E', distance: 278, time: 4.9, stops: 11, efficiency: 88 },
];

const warehouseMetrics = [
  { subject: 'Pick Accuracy', A: 92, B: 85, fullMark: 100 },
  { subject: 'Order Cycle Time', A: 88, B: 76, fullMark: 100 },
  { subject: 'Space Utilization', A: 85, B: 90, fullMark: 100 },
  { subject: 'Labor Productivity', A: 91, B: 82, fullMark: 100 },
  { subject: 'Damage Rate', A: 95, B: 88, fullMark: 100 },
  { subject: 'Inventory Accuracy', A: 96, B: 89, fullMark: 100 },
];

const features = [
  {
    icon: '📊',
    title: 'Real-Time Inventory Tracking',
    desc: 'Live visibility into stock levels, turnover rates, and reorder points across all locations.'
  },
  {
    icon: '🚚',
    title: 'Delivery Performance Analytics',
    desc: 'Track on-time delivery rates, route efficiency, and customer satisfaction metrics.'
  },
  {
    icon: '📈',
    title: 'Demand Forecasting',
    desc: 'AI-powered predictions to optimize inventory levels and reduce stockouts.'
  },
  {
    icon: '🏭',
    title: 'Supplier Performance Monitoring',
    desc: 'Comprehensive dashboards tracking quality, delivery times, and cost metrics.'
  }
];

const painPoints = [
  {
    icon: '🔍',
    title: 'Inventory Blind Spots',
    desc: 'You can\'t see real-time stock levels across multiple locations, leading to overstocking or stockouts.'
  },
  {
    icon: '📉',
    title: 'Manual Reporting',
    desc: 'Hours spent creating reports manually when you need instant insights to make decisions.'
  },
  {
    icon: '🚛',
    title: 'Route Inefficiencies',
    desc: 'Rising fuel costs and delivery delays due to non-optimized routes and poor visibility.'
  },
  {
    icon: '📋',
    title: 'Supplier Gaps',
    desc: 'No unified view of supplier performance, making it hard to identify reliability issues.'
  }
];

export default function OpsLogistics() {
  const [featuresRef, featuresVisible] = useReveal();
  const [painPointsRef, painPointsVisible] = useReveal();
  const [chartsVisible, setChartsVisible] = useState(false);

  // Auto-show charts after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setChartsVisible(true);
    }, 800); // Show charts 800ms after page load

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-gray-800 font-sans overflow-x-hidden">
      {/* Hero */}
      <section className="relative flex flex-col justify-center items-center text-center px-6 pt-20 pb-16 bg-gradient-to-r from-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Elegant Wave Effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="wave-container">
            <div className="wave wave-1"></div>
            <div className="wave wave-2"></div>
            <div className="wave wave-3"></div>
          </div>
        </div>
        
        <span className="absolute left-12 top-16 text-4xl animate-float-slow z-10">📊</span>
        <span className="absolute right-20 top-24 text-3xl animate-float z-10">🚚</span>
        <span className="absolute left-1/3 bottom-12 text-3xl animate-float z-10">📈</span>
        <span className="absolute right-1/4 bottom-20 text-3xl animate-float-slow z-10">🏭</span>
        
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 max-w-4xl relative z-10 leading-tight">
          Turn Your Operations Data Into 
          <span className="text-blue-400"> Actionable Insights</span>
        </h1>
        
        <p className="text-lg max-w-2xl mb-6 text-blue-100 relative z-10 leading-relaxed">
          Stop flying blind in your operations. Get real-time visibility into inventory, fulfillment, 
          supplier performance, and costs with dashboards that help you make decisions.
        </p>
        
        <a
          href="#leadform"
          className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 hover:scale-105 transition-all duration-200 font-semibold text-base relative z-10"
        >
          See Your Data in Action
        </a>
      </section>

      {/* Interactive Charts Section */}
      <section className={`py-16 px-6 bg-white transition-all duration-700 ${chartsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-slate-800">
            See What's Possible With Real-Time Dashboards
          </h2>
          <p className="text-lg text-center text-slate-600 mb-8 max-w-2xl mx-auto">
            These are the kinds of insights you'll have at your fingertips, updated in real-time.
          </p>

          {/* Inventory Management */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 flex items-center">
              <span className="text-3xl mr-3">📦</span>
              Inventory Management Dashboard
            </h3>
            <div className="bg-slate-50 p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold mb-4 text-slate-700">Current vs Optimal Inventory Levels</h4>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={inventoryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="optimal" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="excess" stackId="1" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Order Fulfillment */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 flex items-center">
              <span className="text-3xl mr-3">📋</span>
              Order Fulfillment Performance
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold mb-4 text-slate-700">On-Time Delivery Rate</h4>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={fulfillmentData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="onTime" fill="#10b981" name="On Time %" />
                    <Bar dataKey="late" fill="#ef4444" name="Late %" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold mb-4 text-slate-700">Daily Order Volume</h4>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={fulfillmentData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="orders" stroke="#3b82f6" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

      {/* Pain Points */}
          <div ref={painPointsRef} className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 flex items-center">
              <span className="text-3xl mr-3">⚠️</span>
              The Data Chaos You Face Every Day
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-3xl">
              You're managing complex operations with spreadsheets and gut feelings. There's a better way.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {painPoints.map((point, idx) => (
                <div
                  key={point.title}
                  className={`bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-all duration-300 ${painPointsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: painPointsVisible ? `${idx * 0.1}s` : '0s' }}
                >
                  <div className="text-4xl mb-4">{point.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-slate-800">{point.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Supplier Performance */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 flex items-center">
              <span className="text-3xl mr-3">🏭</span>
              Supplier Performance Metrics
            </h3>
            <div className="bg-slate-50 p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold mb-4 text-slate-700">Multi-Metric Supplier Comparison</h4>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={supplierData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="quality" fill="#10b981" name="Quality Score" />
                  <Bar dataKey="delivery" fill="#3b82f6" name="Delivery Performance" />
                  <Bar dataKey="cost" fill="#ef4444" name="Cost Index" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Cost Analysis */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 flex items-center">
              <span className="text-3xl mr-3">💰</span>
              Cost Breakdown Analysis
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold mb-4 text-slate-700">Operational Cost Distribution</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={costBreakdown}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {costBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold mb-4 text-slate-700">Demand Forecast Accuracy</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={demandForecast}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="actual" stroke="#10b981" strokeWidth={2} name="Actual Demand" />
                    <Line type="monotone" dataKey="predicted" stroke="#3b82f6" strokeWidth={2} strokeDasharray="5 5" name="Predicted Demand" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Route Optimization */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 flex items-center">
              <span className="text-3xl mr-3">🚚</span>
              Route Optimization Dashboard
            </h3>
            <div className="bg-slate-50 p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold mb-4 text-slate-700">Route Performance Metrics</h4>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={routeEfficiency}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="route" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="efficiency" fill="#10b981" name="Efficiency %" />
                  <Bar dataKey="distance" fill="#3b82f6" name="Distance (km)" />
                  <Bar dataKey="stops" fill="#f59e0b" name="Number of Stops" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Advanced Analytics */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 flex items-center">
              <span className="text-3xl mr-3">📈</span>
              Advanced Analytics
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold mb-4 text-slate-700">Supplier Quality vs Delivery Matrix</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <ScatterChart data={supplierData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" dataKey="quality" name="Quality Score" domain={[80, 100]} />
                    <YAxis type="number" dataKey="delivery" name="Delivery Score" domain={[75, 100]} />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} formatter={(value, name) => [value, name]} />
                    <Scatter dataKey="cost" fill="#8884d8" />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold mb-4 text-slate-700">Monthly Shipment Trends</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={[
                    { month: 'Jan', shipments: 1245, delayed: 98, damaged: 23 },
                    { month: 'Feb', shipments: 1398, delayed: 76, damaged: 31 },
                    { month: 'Mar', shipments: 1567, delayed: 124, damaged: 18 },
                    { month: 'Apr', shipments: 1432, delayed: 89, damaged: 27 },
                    { month: 'May', shipments: 1678, delayed: 145, damaged: 35 },
                    { month: 'Jun', shipments: 1523, delayed: 102, damaged: 22 }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="shipments" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.8} name="Total Shipments" />
                    <Area type="monotone" dataKey="delayed" stackId="2" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} name="Delayed" />
                    <Area type="monotone" dataKey="damaged" stackId="3" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} name="Damaged" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Warehouse Performance */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 flex items-center">
              <span className="text-3xl mr-3">🏬</span>
              Warehouse Performance Radar
            </h3>
            <div className="bg-slate-50 p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold mb-4 text-slate-700">Current vs Target Performance</h4>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={warehouseMetrics}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar name="Current" dataKey="A" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                  <Radar name="Target" dataKey="B" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                  <Legend />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} className={`py-20 px-6 bg-gradient-to-r from-blue-50 to-slate-50 transition-all duration-700 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6 text-slate-800">
            Transform Your Operations With Data-Driven Insights
          </h2>
          <p className="text-xl text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            Custom dashboards built for your specific operations needs.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: featuresVisible ? `${idx * 0.1}s` : '0s' }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* Lead capture form */}
      <section id="leadform" className="py-20 px-6 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to See Your Operations Data Come to Life?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get a personalized demo showing how these dashboards would work with your actual data.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="email"
                  placeholder="Work Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="What's your biggest operations challenge?"
                rows={3}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              />
              <button
                type="submit"
                className="w-full px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Get My Custom Demo
              </button>
          </form>
            <p className="text-sm text-blue-200 mt-4">
              No spam, no sales pressure. Just a genuine conversation about your operations.
            </p>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0); }
        }
        @keyframes float-slow {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        @keyframes wave {
          0% { transform: translateX(-100%) scaleY(1); }
          50% { transform: translateX(50%) scaleY(1.2); }
          100% { transform: translateX(200%) scaleY(1); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .wave-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        .wave {
          position: absolute;
          width: 150%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(59, 130, 246, 0.15),
            rgba(147, 197, 253, 0.25),
            rgba(59, 130, 246, 0.15),
            transparent
          );
          border-radius: 50%;
          transform: translateX(-100%);
        }
        .wave-1 {
          animation: wave 8s ease-in-out infinite;
          animation-delay: 0s;
          top: 20%;
          height: 60%;
        }
        .wave-2 {
          animation: wave 10s ease-in-out infinite;
          animation-delay: 2s;
          top: 40%;
          height: 40%;
          opacity: 0.7;
        }
        .wave-3 {
          animation: wave 12s ease-in-out infinite;
          animation-delay: 4s;
          top: 60%;
          height: 30%;
          opacity: 0.5;
        }
      `}</style>
    </main>
  );
} 