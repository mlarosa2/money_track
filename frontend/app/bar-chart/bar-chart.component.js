"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var D3 = require("d3");
var Moment = require("moment");
var BarChartComponent = (function () {
    function BarChartComponent() {
    }
    BarChartComponent.prototype.ngAfterViewInit = function () {
        this.htmlElement = this.elements.nativeElement;
        this.host = D3.select(this.htmlElement);
        this.setup();
    };
    BarChartComponent.prototype.ngOnChanges = function () {
        if (!this.config || this.config.length === 0 || !this.host)
            return;
        this.setup();
        this.buildSVG();
        this.populate();
        this.drawXAxis();
        this.drawYAxis();
    };
    BarChartComponent.prototype.setup = function () {
        this.margin = { top: 20, right: 20, bottom: 40, left: 40 };
        this.width = this.htmlElement.clientWidth - this.margin.left - this.margin.right;
        this.height = this.width * 0.5 - this.margin.top - this.margin.bottom;
        this.xScale = D3.scale.ordinal().range([0, this.width]);
        this.yScale = D3.scale.linear().range([this.height, 0]);
    };
    BarChartComponent.prototype.buildSVG = function () {
        this.host.html('');
        this.svg = this.host.append('svg')
            .attr('width', this.width + this.margin.left + this.margin.right)
            .attr('height', this.height + this.margin.top + this.margin.bottom)
            .append('g')
            .attr('transform', "translate(" + this.margin.left + ", " + this.margin.top + ")");
    };
    BarChartComponent.prototype.drawXAxis = function () {
        this.xAxis = D3.svg.axis().scale(this.xScale)
            .orient('bottom')
            .tickFormat(function (t) { return Moment(t).format('MMM').toUpperCase(); })
            .tickPadding(15);
        this.svg.append('g')
            .attr('class', 'x axis')
            .attr('transform', "translate(0, " + this.height + ")")
            .call(this.xAxis);
    };
    BarChartComponent.prototype.drawYAxis = function () {
        this.yAxis = D3.svg.axis().scale(this.yScale)
            .orient('left')
            .tickPadding(10);
        this.svg.append('g')
            .attr('class', 'y axis')
            .call(this.yAxis)
            .append('text')
            .attr('transform', 'rotate(-90)');
    };
    BarChartComponent.prototype.getMaxY = function () {
        var maxValues = [];
        this.config.forEach(function (data) { return maxValues.push(Math.max.apply(Math, data.dataset.map(function (d) { return d.y; }))); });
        return Math.max.apply(Math, maxValues);
    };
    BarChartComponent.prototype.populate = function () {
        var _this = this;
        this.config.forEach(function (bar) {
            _this.xScale.domain(D3.extent(bar.dataset, function (d) { return d.x; }));
            _this.yScale.domain([0, _this.getMaxY]);
            _this.svg.selectAll('bar')
                .data(bar)
                .enter().append('rect')
                .style('fill', 'steelblue')
                .attr('x', function (d) { d.date; })
                .attr('width', _this.xScale.rangeBand())
                .attr('y', function (d) { d.value; })
                .attr('height', function (d) { _this.height - _this.yScale(d.value); });
        });
    };
    return BarChartComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], BarChartComponent.prototype, "config", void 0);
__decorate([
    core_1.ViewChild('container'),
    __metadata("design:type", core_1.ElementRef)
], BarChartComponent.prototype, "elements", void 0);
BarChartComponent = __decorate([
    core_1.Component({
        selector: 'bar-chart',
        templateUrl: './bar-chart.component.html'
    }),
    __metadata("design:paramtypes", [])
], BarChartComponent);
exports.BarChartComponent = BarChartComponent;
//# sourceMappingURL=bar-chart.component.js.map