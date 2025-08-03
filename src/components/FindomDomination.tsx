import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShardDivider } from './ShardDivider';

export const FindomDomination = () => {
  return (
    <section className="relative py-20 px-6 md:px-8">
      <ShardDivider />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
            Financial Domination
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the ultimate power exchange where your financial submission becomes my pleasure
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Submit Your Wealth
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Your money flows to me naturally, as it should. Each tribute strengthens your devotion 
                and deepens your submission. I don't just take your money – I transform your relationship with it.
              </p>
            </div>

            <div className="grid gap-4">
              <Card className="bg-black/40 border-red-900/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-red-400 mb-2">Tribute Levels</h4>
                  <p className="text-gray-300">From modest offerings to life-changing surrenders</p>
                </CardContent>
              </Card>
              
              <Card className="bg-black/40 border-purple-900/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-purple-400 mb-2">Financial Training</h4>
                  <p className="text-gray-300">Learn to budget for my pleasure, not your own</p>
                </CardContent>
              </Card>
              
              <Card className="bg-black/40 border-orange-900/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-orange-400 mb-2">Complete Control</h4>
                  <p className="text-gray-300">Hand over your financial freedom to your Superior</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-4">
              <Button 
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Send Tribute
              </Button>
              <Button 
                variant="outline" 
                className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-200"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-red-900/20 via-purple-900/20 to-orange-900/20 rounded-2xl border border-red-900/30 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl">💰</div>
                <h4 className="text-2xl font-bold text-red-400">Your Offering</h4>
                <p className="text-gray-300 max-w-xs">
                  Every dollar you send is a step deeper into submission
                </p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-60 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-orange-500 rounded-full opacity-60 animate-pulse delay-500"></div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-900/20 via-purple-900/20 to-orange-900/20 rounded-xl border border-red-900/30 backdrop-blur-sm p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Financial Submission Guidelines
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="text-lg font-bold text-red-400 mb-2">Respect</h4>
                <p className="text-gray-300">Approach with proper reverence and submission</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-purple-400 mb-2">Consistency</h4>
                <p className="text-gray-300">Regular tributes show true dedication</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-orange-400 mb-2">Surrender</h4>
                <p className="text-gray-300">Let go of control over your finances</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
