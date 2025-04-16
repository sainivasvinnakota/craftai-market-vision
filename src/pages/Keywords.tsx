
import { useState, useEffect } from "react";
import MainLayout from "@/components/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const Keywords = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [timeFrame, setTimeFrame] = useState("month");
  
  // Mocked data for keyword analysis
  const keywordData = {
    trending: [
      { keyword: "sustainable", count: 3750, growth: 28 },
      { keyword: "boho", count: 2980, growth: 15 },
      { keyword: "minimalist", count: 2645, growth: 12 },
      { keyword: "handwoven", count: 2420, growth: 21 },
      { keyword: "organic", count: 2190, growth: 18 },
      { keyword: "personalized", count: 1985, growth: 9 },
      { keyword: "macrame", count: 1740, growth: 7 },
      { keyword: "rattan", count: 1620, growth: 32 },
      { keyword: "botanical", count: 1520, growth: 14 },
      { keyword: "ceramic", count: 1380, growth: 5 },
    ],
    categories: [
      { name: "Home Decor", value: 35 },
      { name: "Accessories", value: 25 },
      { name: "Kitchen & Dining", value: 15 },
      { name: "Art & Collectibles", value: 12 },
      { name: "Clothing", value: 8 },
      { name: "Bath & Beauty", value: 5 }
    ],
    seasonalTrends: {
      month: [
        { keyword: "spring", count: 2450, growth: 85 },
        { keyword: "floral", count: 1840, growth: 62 },
        { keyword: "garden", count: 1620, growth: 45 },
        { keyword: "mothers day", count: 1580, growth: 120 },
        { keyword: "outdoor", count: 1240, growth: 38 },
        { keyword: "pastel", count: 980, growth: 42 },
        { keyword: "easter", count: 860, growth: 75 },
        { keyword: "picnic", count: 740, growth: 28 },
        { keyword: "lightweight", count: 620, growth: 15 },
        { keyword: "bridal", count: 580, growth: 22 },
      ],
      quarter: [
        { keyword: "summer", count: 3250, growth: 45 },
        { keyword: "wedding", count: 2840, growth: 32 },
        { keyword: "outdoor", count: 2580, growth: 28 },
        { keyword: "garden", count: 2320, growth: 25 },
        { keyword: "beach", count: 1980, growth: 35 },
        { keyword: "vacation", count: 1820, growth: 40 },
        { keyword: "gift", count: 1740, growth: 15 },
        { keyword: "sustainable", count: 1680, growth: 22 },
        { keyword: "boho", count: 1420, growth: 12 },
        { keyword: "linen", count: 1280, growth: 18 },
      ],
      year: [
        { keyword: "sustainable", count: 4250, growth: 68 },
        { keyword: "handmade", count: 3980, growth: 42 },
        { keyword: "personalized", count: 3540, growth: 35 },
        { keyword: "unique", count: 3120, growth: 28 },
        { keyword: "vintage", count: 2980, growth: 22 },
        { keyword: "minimalist", count: 2740, growth: 32 },
        { keyword: "organic", count: 2580, growth: 45 },
        { keyword: "eco friendly", count: 2340, growth: 58 },
        { keyword: "custom", count: 2180, growth: 25 },
        { keyword: "bohemian", count: 1940, growth: 18 },
      ]
    }
  };

  const COLORS = ['#C8553D', '#9CBB85', '#F4F1DE', '#1D3557', '#E07A5F', '#81B29A'];
  
  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const calculateFontSize = (count: number) => {
    const min = Math.min(...keywordData.trending.map(item => item.count));
    const max = Math.max(...keywordData.trending.map(item => item.count));
    const minFontSize = 14;
    const maxFontSize = 32;
    
    return minFontSize + ((count - min) / (max - min)) * (maxFontSize - minFontSize);
  };
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Keyword Analysis</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the most popular keywords and trending terms for artisan crafts
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Top Trending Keywords</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="h-[300px] bg-gray-100 animate-pulse rounded-md"></div>
              ) : (
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={keywordData.trending.slice(0, 10)} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="keyword" type="category" width={100} />
                      <Tooltip 
                        formatter={(value: any, name: any) => [`${value} searches`, 'Count']}
                        labelFormatter={(value: any) => `#${value}`}
                      />
                      <Bar dataKey="count" fill="#C8553D" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Product Categories</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="h-[300px] bg-gray-100 animate-pulse rounded-md"></div>
              ) : (
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={keywordData.categories}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {keywordData.categories.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value: any) => `${value}%`} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        
        <Card className="mb-12">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Keyword Cloud</CardTitle>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Growth</span>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-xs text-gray-500">Increasing</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <span className="text-xs text-gray-500">Stable</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-xs text-gray-500">Decreasing</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="h-[200px] bg-gray-100 animate-pulse rounded-md"></div>
            ) : (
              <div className="p-6 bg-cream/50 rounded-lg min-h-[200px] flex flex-wrap justify-center items-center gap-4">
                {keywordData.trending.map((item) => {
                  const fontSize = calculateFontSize(item.count);
                  let color = "#F59E0B"; // Amber for stable (growth between 10-20%)
                  
                  if (item.growth > 20) {
                    color = "#10B981"; // Green for increasing
                  } else if (item.growth < 10) {
                    color = "#EF4444"; // Red for decreasing
                  }
                  
                  return (
                    <span
                      key={item.keyword}
                      className="px-2 py-1 cursor-pointer hover:opacity-80 transition-opacity"
                      style={{
                        fontSize: `${fontSize}px`,
                        color,
                        fontWeight: fontSize > 24 ? "bold" : "normal"
                      }}
                      title={`${item.keyword}: ${item.count} searches (${item.growth > 0 ? '+' : ''}${item.growth}% growth)`}
                    >
                      #{item.keyword}
                    </span>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Seasonal Keyword Trends</CardTitle>
            <Select value={timeFrame} onValueChange={setTimeFrame}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time frame" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="h-[400px] bg-gray-100 animate-pulse rounded-md"></div>
            ) : (
              <Tabs defaultValue="bar" className="w-full">
                <div className="flex justify-end mb-4">
                  <TabsList>
                    <TabsTrigger value="bar">Bar</TabsTrigger>
                    <TabsTrigger value="growth">Growth</TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="bar" className="focus:outline-none">
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={keywordData.seasonalTrends[timeFrame as keyof typeof keywordData.seasonalTrends]}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="keyword" />
                        <YAxis />
                        <Tooltip 
                          formatter={(value: any) => [`${value} searches`, 'Count']}
                          labelFormatter={(value: any) => `#${value}`}
                        />
                        <Bar dataKey="count" fill="#9CBB85" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </TabsContent>
                <TabsContent value="growth" className="focus:outline-none">
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={keywordData.seasonalTrends[timeFrame as keyof typeof keywordData.seasonalTrends]}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="keyword" />
                        <YAxis />
                        <Tooltip 
                          formatter={(value: any) => [`${value}%`, 'Growth']}
                          labelFormatter={(value: any) => `#${value}`}
                        />
                        <Bar dataKey="growth" fill="#1D3557" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </TabsContent>
              </Tabs>
            )}
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Keywords;
