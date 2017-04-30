import {
    Component, 
    OnChanges,
    AfterViewInit,
    Input,
    ElementRef,
    ViewChild
} from '@angular/core';
import { BarChartConfig } from './bar-chart-config';
import * as D3 from '../../node_modules/d3/d3.min.js';
import * as Moment from '../../node_modules/moment/moment.js';

@Component({
    selector: 'bar-chart',
    templateUrl: 'app/bar-chart/bar-chart.component.html'
})
export class BarChartComponent implements OnChanges, AfterViewInit {

    @Input() config: Array<BarChartConfig>;
    @ViewChild('container') elements: ElementRef;

    private host;
    private svg;
    private margin;
    private width;
    private height;
    private xScale;
    private yScale;
    private xAxis;
    private yAxis;
    private htmlElement: HTMLElement;

    constructor() {}

    ngAfterViewInit() {
        this.htmlElement = this.elements.nativeElement;
        this.host = D3.select(this.htmlElement);
        this.setup();
    }

    ngOnChanges(): void {
        if (!this.config || this.config.length === 0 || !this.host) return;
        this.setup();
        this.buildSVG();
        this.populate();
        this.drawXAxis();
        this.drawYAxis();
    }

    private setup(): void {
        this.margin = { top: 20, right: 20, bottom: 40, left: 40 };
        this.width = this.htmlElement.clientWidth - this.margin.left - this.margin.right;
        this.height = this.width * 0.5 - this.margin.top - this.margin.bottom;
        this.xScale = D3.scale.ordinal().range([0, this.width]);
        this.yScale = D3.scale.linear().range([this.height, 0]);
    }

    private buildSVG(): void {
        this.host.html('');
        this.svg = this.host.append('svg')
            .attr('width', this.width + this.margin.left + this.margin.right)
            .attr('height', this.height + this.margin.top + this.margin.bottom)
            .append('g')
            .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);
    }

    private drawXAxis(): void {
        this.xAxis = D3.svg.axis().scale(this.xScale)
            .orient('bottom')
            .tickFormat((t: string) => Moment(t).format('MMM').toUpperCase())
            .tickPadding(15);
        this.svg.append('g')
            .attr('class', 'x axis')
            .attr('transform', `translate(0, ${this.height})`)
            .call(this.xAxis);
    }

    private drawYAxis(): void {
        this.yAxis = D3.svg.axis().scale(this.yScale)
            .orient('left')
            .tickPadding(10);
        this.svg.append('g')
            .attr('class', 'y axis')
            .call(this.yAxis)
            .append('text')
            .attr('transform', 'rotate(-90)');
    }

    private getMaxY(): number {
        const maxValues = [];
        this.config.forEach( data => maxValues.push(Math.max.apply(Math, data.dataset.map(d => d.y))));
        return Math.max(...maxValues);
    }

    private populate(): void {
        this.config.forEach((bar: any) => {
            this.xScale.domain(D3.extent(bar.dataset, (d: any) => d.x));
            this.yScale.domain([0, this.getMaxY]);
            this.svg.selectAll('bar')
                .data(bar)
                .enter().append('rect')
                .style('fill', 'steelblue')
                .attr('x', d => { d.date })
                .attr('width', this.xScale.rangeBand())
                .attr('y', d => { d.value })
                .attr('height', d => { this.height - this.yScale(d.value) });
        });
    }
}

